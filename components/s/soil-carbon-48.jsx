import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz0wpbbiw.css';
import '../../css/v/vuwpiobog.css';
import '../../css/v/vvcbaxyiy.css';
import '../../css/q/qlqs7c5ek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz0wpbbiw"/><path class="vuwpiobog"/><path class="vvcbaxyiy"/><path class="qlqs7c5ek"/>`,
		"fallback": "energy-icons:soil-carbon-48",
	});
}

export default Component;
