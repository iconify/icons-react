import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab210x7np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab210x7np"/>`,
		"fallback": "lucide-extended:timeline-filled",
	});
}

export default Component;
