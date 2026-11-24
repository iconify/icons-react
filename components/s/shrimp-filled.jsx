import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjna77bsx.css';
import '../../css/p/p48132bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjna77bsx"/><path clip-rule="evenodd" class="p48132bjd"/>`,
		"fallback": "lucide-extended:shrimp-filled",
	});
}

export default Component;
