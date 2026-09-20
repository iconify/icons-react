import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy519s08g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy519s08g"/>`,
		"fallback": "tdesign:snowflake",
	});
}

export default Component;
