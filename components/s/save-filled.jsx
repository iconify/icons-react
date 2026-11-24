import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mapjoxb2i.css';
import '../../css/n/nbzxfbcpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mapjoxb2i"/><path class="nbzxfbcpy"/>`,
		"fallback": "lucide-extended:save-filled",
	});
}

export default Component;
