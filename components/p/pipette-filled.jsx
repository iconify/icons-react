import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngyrl8b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ngyrl8b-s"/>`,
		"fallback": "lucide-extended:pipette-filled",
	});
}

export default Component;
