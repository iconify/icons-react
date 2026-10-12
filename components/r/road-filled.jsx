import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2a-s9bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m2a-s9bmq"/>`,
		"fallback": "lucide-extended:road-filled",
	});
}

export default Component;
