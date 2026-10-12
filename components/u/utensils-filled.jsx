import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi8rx-aqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi8rx-aqc"/>`,
		"fallback": "lucide-extended:utensils-filled",
	});
}

export default Component;
