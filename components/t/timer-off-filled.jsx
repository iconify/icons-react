import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgkfl6b7g.css';
import '../../css/t/t2vwib_3k.css';
import '../../css/z/zka-lh4oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgkfl6b7g"/><path clip-rule="evenodd" class="t2vwib_3k"/><path class="zka-lh4oe"/>`,
		"fallback": "lucide-extended:timer-off-filled",
	});
}

export default Component;
