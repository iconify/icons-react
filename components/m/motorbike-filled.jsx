import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye3f72bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye3f72bhe"/>`,
		"fallback": "lucide-extended:motorbike-filled",
	});
}

export default Component;
