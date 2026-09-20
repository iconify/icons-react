import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frpgang2p.css';
import '../../css/g/gp6vekbyg.css';
import '../../css/q/qc-_kzt9w.css';
import '../../css/f/fmovjab8d.css';

const viewBox = {"width":210,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frpgang2p"/><path class="gp6vekbyg"/><path class="qc-_kzt9w"/><path class="fmovjab8d"/>`,
		"fallback": "thesvg-color:lg-energy-solution",
	});
}

export default Component;
