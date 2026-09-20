import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fcanezbfn.css';
import '../../css/s/sro91sbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fcanezbfn"/><path class="sro91sbwr"/></g>`,
		"fallback": "proicons:save-multiple",
	});
}

export default Component;
