import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxvb6cctw.css';
import '../../css/n/n5sg21b7n.css';
import '../../css/z/zj890cb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxvb6cctw"/><path class="n5sg21b7n"/><path class="zj890cb5n"/>`,
		"fallback": "lucide-extended:sticky-note-check-filled",
	});
}

export default Component;
