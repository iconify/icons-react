import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/ljxcg8b7i.css';
import '../../css/m/mrt9bwk2y.css';
import '../../css/c/cww-bgbad.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="ljxcg8b7i"/><path class="mrt9bwk2y"/><path class="cww-bgbad"/></g>`,
		"fallback": "skill-icons:opencv-light",
	});
}

export default Component;
