import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hksa8qn3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hksa8qn3t"/>`,
		"fallback": "lucide:syringe",
	});
}

export default Component;
