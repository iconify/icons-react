import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4vcs__ux.css';
import '../../css/o/o_kiupjve.css';
import '../../css/k/kz2f02byn.css';
import '../../css/z/zkx8fnb6t.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4vcs__ux"/><path class="o_kiupjve"/><path class="kz2f02byn"/><path class="zkx8fnb6t"/></g>`,
		"fallback": "cif:ly",
	});
}

export default Component;
