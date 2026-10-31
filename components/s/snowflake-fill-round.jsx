import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-hv9wb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-hv9wb4j"/>`,
		"fallback": "coolicons:snowflake-fill-round",
	});
}

export default Component;
