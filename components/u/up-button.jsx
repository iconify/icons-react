import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qec1zubfq.css';
import '../../css/v/vb0zy4bpj.css';
import '../../css/s/sflimwqwt.css';
import '../../css/f/f-f29in2d.css';
import '../../css/i/is756bbga.css';
import '../../css/l/lnwims27h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qec1zubfq"/><path class="vb0zy4bpj"/><path class="sflimwqwt"/><path class="f-f29in2d"/><path class="is756bbga"/><circle class="lnwims27h"/>`,
		"fallback": "openmoji:up-button",
	});
}

export default Component;
