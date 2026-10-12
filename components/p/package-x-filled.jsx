import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj7aqqr_k.css';
import '../../css/x/xomsf6buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aj7aqqr_k"/><path class="xomsf6buj"/>`,
		"fallback": "lucide-extended:package-x-filled",
	});
}

export default Component;
