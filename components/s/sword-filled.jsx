import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqnd5b4rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqnd5b4rp"/>`,
		"fallback": "lucide-extended:sword-filled",
	});
}

export default Component;
