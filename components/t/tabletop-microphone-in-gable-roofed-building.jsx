import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfs99hb8j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfs99hb8j"/>`,
		"fallback": "pinhead:tabletop-microphone-in-gable-roofed-building",
	});
}

export default Component;
