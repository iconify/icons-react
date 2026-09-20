import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/g/gikpdyyno.css';
import '../../css/o/otit0l4ks.css';
import '../../css/b/btxit0bwv.css';
import '../../css/f/f6cn9dwnw.css';
import '../../css/v/vu3r09bky.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="gikpdyyno"/><circle class="otit0l4ks"/><path class="btxit0bwv"/><path class="f6cn9dwnw"/><path class="vu3r09bky"/>`,
		"fallback": "openmoji:smiling-face-with-tear",
	});
}

export default Component;
