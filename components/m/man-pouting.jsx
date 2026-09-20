import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2i6tnbfo.css';
import '../../css/c/csi2p5buc.css';
import '../../css/v/v7f9t3ulu.css';
import '../../css/z/z8r14fb0j.css';
import '../../css/z/zrod-4bjx.css';
import '../../css/l/lolphwbuf.css';
import '../../css/e/e1pzf2bzx.css';
import '../../css/a/azum99bhp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2i6tnbfo"/><path class="csi2p5buc"/><path class="v7f9t3ulu"/><path class="z8r14fb0j"/><path class="zrod-4bjx"/><path class="lolphwbuf"/><path class="e1pzf2bzx"/><path class="azum99bhp"/>`,
		"fallback": "openmoji:man-pouting",
	});
}

export default Component;
