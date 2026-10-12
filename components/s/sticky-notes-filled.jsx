import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tugoukqgy.css';
import '../../css/s/sc-v4kmjp.css';
import '../../css/k/kqvg6317g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tugoukqgy"/><path clip-rule="evenodd" class="sc-v4kmjp"/><path class="kqvg6317g"/>`,
		"fallback": "lucide-extended:sticky-notes-filled",
	});
}

export default Component;
