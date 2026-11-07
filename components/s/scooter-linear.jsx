import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/brb78ubne.css';
import '../../css/j/jtqkl-bna.css';
import '../../css/m/mhfqdbcrm.css';
import '../../css/i/imww9df-s.css';
import '../../css/i/ijh6inb8v.css';
import '../../css/f/frhhq-_pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="brb78ubne"/><path class="jtqkl-bna"/><path class="mhfqdbcrm"/><path class="imww9df-s"/><path class="ijh6inb8v"/><circle class="frhhq-_pl"/></g>`,
		"fallback": "solar:scooter-linear",
	});
}

export default Component;
