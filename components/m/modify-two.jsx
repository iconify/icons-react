import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f22wqelib.css';
import '../../css/l/l7q0ip_gf.css';
import '../../css/r/rx9asmbnf.css';
import '../../css/z/z5ec-kbwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="f22wqelib"/><path class="l7q0ip_gf"/><path class="rx9asmbnf"/><path class="z5ec-kbwe"/></g>`,
		"fallback": "icon-park-outline:modify-two",
	});
}

export default Component;
