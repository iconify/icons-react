import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz_npsbmq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz_npsbmq"/>`,
		"fallback": "devicon:teleport",
	});
}

export default Component;
