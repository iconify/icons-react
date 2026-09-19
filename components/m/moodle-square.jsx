import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwzby5b2f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwzby5b2f"/>`,
		"fallback": "academicons:moodle-square",
	});
}

export default Component;
