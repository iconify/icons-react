import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrwoprbeg.css';
import '../../css/f/fe7662b-c.css';
import '../../css/k/kyudrjbij.css';
import '../../css/q/quptbvc9e.css';
import '../../css/w/w0poz4bns.css';
import '../../css/p/p5uqo6r1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrwoprbeg"/><path class="fe7662b-c"/><path class="kyudrjbij"/><path class="quptbvc9e"/><path class="w0poz4bns"/><path class="p5uqo6r1z"/>`,
		"fallback": "energy-icons:weather-station-20-bold",
	});
}

export default Component;
