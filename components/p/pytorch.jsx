import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohbddizm.css';
import '../../css/f/fjrjp3bov.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rohbddizm"/><circle transform="rotate(-88.939 82.069 29.398)scale(.99997)" class="fjrjp3bov"/>`,
		"fallback": "devicon:pytorch",
	});
}

export default Component;
