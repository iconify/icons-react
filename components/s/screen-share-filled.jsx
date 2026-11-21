import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nod_500mb.css';
import '../../css/q/qgnvfcgyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nod_500mb"/><path class="qgnvfcgyj"/>`,
		"fallback": "lucide-extended:screen-share-filled",
	});
}

export default Component;
