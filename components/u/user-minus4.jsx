import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvxrz6bfm.css';
import '../../css/x/xe7hzwbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zvxrz6bfm"/><path class="xe7hzwbab"/></g>`,
		"fallback": "reicon:user-minus4",
	});
}

export default Component;
