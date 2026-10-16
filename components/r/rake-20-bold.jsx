import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k--qs-afs.css';
import '../../css/w/wtt-7nbfn.css';
import '../../css/f/fzdecdctz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k--qs-afs"/><path class="wtt-7nbfn"/><path class="fzdecdctz"/>`,
		"fallback": "energy-icons:rake-20-bold",
	});
}

export default Component;
