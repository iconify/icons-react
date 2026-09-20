import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be_gcblti.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be_gcblti"/>`,
		"fallback": "la:stethoscope",
	});
}

export default Component;
