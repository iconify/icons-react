import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc5uqjbvk.css';
import '../../css/k/kde8vp2lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc5uqjbvk"/><path class="kde8vp2lw"/>`,
		"fallback": "streamline-freehand:music-clef",
	});
}

export default Component;
