import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npdvl2brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npdvl2brz"/>`,
		"fallback": "lucide-extended:megaphone-filled",
	});
}

export default Component;
