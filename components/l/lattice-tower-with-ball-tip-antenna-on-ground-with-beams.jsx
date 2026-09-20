import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ar__b5k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2ar__b5k"/>`,
		"fallback": "pinhead:lattice-tower-with-ball-tip-antenna-on-ground-with-beams",
	});
}

export default Component;
