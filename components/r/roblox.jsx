import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6my9fadk.css';
import '../../css/t/tmdjm3bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect transform="rotate(15 6.336 2.19)" class="v6my9fadk"/><rect transform="rotate(15 10.112 8.73)" class="tmdjm3bnm"/></g>`,
		"fallback": "proicons:roblox",
	});
}

export default Component;
