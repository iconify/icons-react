import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqc6zt2xp.css';
import '../../css/h/hcqjcgwzg.css';
import '../../css/w/wsg7qlbxr.css';
import '../../css/k/kbia9xb4o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hqc6zt2xp"/><path class="hcqjcgwzg"/><path class="wsg7qlbxr"/><path class="kbia9xb4o"/></g>`,
		"fallback": "fluent-emoji-flat:razor",
	});
}

export default Component;
