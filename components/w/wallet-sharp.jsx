import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-g5sab0v.css';
import '../../css/l/lafymqbeu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-g5sab0v"/><path class="lafymqbeu"/>`,
		"fallback": "famicons:wallet-sharp",
	});
}

export default Component;
