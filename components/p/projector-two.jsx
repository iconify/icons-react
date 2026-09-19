import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r5bdwzbjs.css';
import '../../css/e/edfg9vbrl.css';
import '../../css/c/c047ylp0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="r5bdwzbjs"/><path class="edfg9vbrl"/><circle class="c047ylp0r"/></g>`,
		"fallback": "icon-park-outline:projector-two",
	});
}

export default Component;
