import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2lhz8f1q.css';
import '../../css/v/vnjnmccnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2lhz8f1q"/><path class="vnjnmccnj"/>`,
		"fallback": "lucide-extended:star-check-filled",
	});
}

export default Component;
