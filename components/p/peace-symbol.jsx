import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl4bojyvf.css';
import '../../css/f/fxd4qubmf.css';
import '../../css/w/wrh9myb6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cl4bojyvf"/><path class="fxd4qubmf"/><path class="wrh9myb6j"/></g>`,
		"fallback": "streamline-color:peace-symbol",
	});
}

export default Component;
