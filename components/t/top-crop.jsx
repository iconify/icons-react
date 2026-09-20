import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyd0wpb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyd0wpb9b"/>`,
		"fallback": "lucide-lab:top-crop",
	});
}

export default Component;
