import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/he98dze-z.css';
import '../../css/o/o4zs0cbxj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="he98dze-z"/><path class="o4zs0cbxj"/></g>`,
		"fallback": "streamline-flex:key-frame",
	});
}

export default Component;
