import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw241zkrq.css';
import '../../css/n/nwzkmo20o.css';
import '../../css/m/msx1rfbja.css';
import '../../css/t/twmz0qemg.css';
import '../../css/i/isq2ubc0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw241zkrq"/><path class="nwzkmo20o"/><path class="msx1rfbja"/><path class="twmz0qemg"/><path class="isq2ubc0u"/>`,
		"fallback": "energy-icons:tram-20",
	});
}

export default Component;
