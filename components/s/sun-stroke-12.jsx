import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i--4ambuk.css';
import '../../css/q/qzo006suv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i--4ambuk"/><path class="qzo006suv"/>`,
		"fallback": "garden:sun-stroke-12",
	});
}

export default Component;
