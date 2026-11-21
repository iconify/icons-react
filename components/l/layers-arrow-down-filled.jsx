import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3c-5acjg.css';
import '../../css/g/g5wxtpvfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3c-5acjg"/><path class="g5wxtpvfn"/>`,
		"fallback": "lucide-extended:layers-arrow-down-filled",
	});
}

export default Component;
