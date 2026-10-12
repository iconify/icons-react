import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqm22z9lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqm22z9lz"/>`,
		"fallback": "lucide-extended:triangle-right-filled",
	});
}

export default Component;
