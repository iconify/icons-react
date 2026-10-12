import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr9er0b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mr9er0b4v"/>`,
		"fallback": "lucide-extended:lectern-filled",
	});
}

export default Component;
