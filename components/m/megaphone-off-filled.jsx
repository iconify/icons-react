import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qegn1_8ui.css';
import '../../css/w/w0dhn7mec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qegn1_8ui"/><path class="w0dhn7mec"/>`,
		"fallback": "lucide-extended:megaphone-off-filled",
	});
}

export default Component;
