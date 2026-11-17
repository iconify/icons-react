import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk9pgpbto.css';
import '../../css/i/ik-axzblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk9pgpbto"/><path class="ik-axzblt"/>`,
		"fallback": "lucide-extended:square-arrow-down-exit-filled",
	});
}

export default Component;
