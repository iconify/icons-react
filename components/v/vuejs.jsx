import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaaxbibek.css';
import '../../css/h/h-b6q9b2h.css';
import '../../css/g/gueqvmrxi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaaxbibek"/><path class="h-b6q9b2h"/><path class="gueqvmrxi"/>`,
		"fallback": "devicon:vuejs",
	});
}

export default Component;
