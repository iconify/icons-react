import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/municvskz.css';
import '../../css/d/dto37ib1f.css';
import '../../css/t/twweyxo1y.css';
import '../../css/g/ga3fcn2xs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="municvskz"/><path class="dto37ib1f"/><path class="twweyxo1y"/><path class="ga3fcn2xs"/></g>`,
		"fallback": "streamline-kameleon-color:joystick-duo",
	});
}

export default Component;
