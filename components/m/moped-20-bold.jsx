import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq2op-bzr.css';
import '../../css/r/rucx1acha.css';
import '../../css/p/pkqibmblv.css';
import '../../css/k/kg7y9mgki.css';
import '../../css/s/sy560ubcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq2op-bzr"/><path class="rucx1acha"/><path class="pkqibmblv"/><path class="kg7y9mgki"/><path class="sy560ubcd"/>`,
		"fallback": "energy-icons:moped-20-bold",
	});
}

export default Component;
