import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6te3llwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o6te3llwz"/>`,
		"fallback": "lucide-extended:test-tube-filled",
	});
}

export default Component;
