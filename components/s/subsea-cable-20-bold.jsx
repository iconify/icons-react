import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-lmr9bkb.css';
import '../../css/t/tk7jp-bls.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-lmr9bkb"/><path class="tk7jp-bls"/>`,
		"fallback": "energy-icons:subsea-cable-20-bold",
	});
}

export default Component;
