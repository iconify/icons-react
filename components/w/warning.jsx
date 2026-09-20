import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/k/kz60qjbkb.css';
import '../../css/n/nuer4ybvc.css';
import '../../css/u/u6w5clbyu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/ggvrgk83l.css';
import '../../css/c/cu2qjub5t.css';
import '../../css/t/tahp7wbox.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="kz60qjbkb"/><path class="nuer4ybvc"/><circle class="u6w5clbyu"/></g><g class="ij2x_72vy"><path class="ggvrgk83l"/><path class="cu2qjub5t"/><circle class="tahp7wbox"/></g>`,
		"fallback": "openmoji:warning",
	});
}

export default Component;
