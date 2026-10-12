import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff17ze2qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff17ze2qo"/>`,
		"fallback": "lucide-extended:presentation-filled",
	});
}

export default Component;
