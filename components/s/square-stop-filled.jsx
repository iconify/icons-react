import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qahyg6byo.css';
import '../../css/z/zu_sz4rou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qahyg6byo"/><path clip-rule="evenodd" class="zu_sz4rou"/>`,
		"fallback": "lucide-extended:square-stop-filled",
	});
}

export default Component;
