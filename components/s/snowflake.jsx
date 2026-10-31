import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmgd87b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmgd87b8k"/>`,
		"fallback": "sidekickicons:snowflake",
	});
}

export default Component;
