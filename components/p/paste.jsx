import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6bpeub0j.css';
import '../../css/s/s4twj4zjj.css';
import '../../css/x/x3v5_rbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o6bpeub0j"/><path class="s4twj4zjj"/><path class="x3v5_rbso"/></g>`,
		"fallback": "andrsrxn:paste",
	});
}

export default Component;
