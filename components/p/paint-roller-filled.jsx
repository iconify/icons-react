import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv_oh1bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv_oh1bhn"/>`,
		"fallback": "lucide-extended:paint-roller-filled",
	});
}

export default Component;
