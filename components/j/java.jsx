import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9gg9kwla.css';
import '../../css/g/g8r11xbyl.css';
import '../../css/m/mev1hea9q.css';
import '../../css/q/q3g_if6kz.css';
import '../../css/n/ns5cfdloq.css';

const viewBox = {"width":256,"height":346};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9gg9kwla"/><path class="g8r11xbyl"/><path class="mev1hea9q"/><path class="q3g_if6kz"/><path class="ns5cfdloq"/>`,
		"fallback": "thesvg-color:java",
	});
}

export default Component;
