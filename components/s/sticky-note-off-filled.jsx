import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z66sv6m2l.css';
import '../../css/a/am-g_zbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z66sv6m2l"/><path class="am-g_zbai"/>`,
		"fallback": "lucide-extended:sticky-note-off-filled",
	});
}

export default Component;
