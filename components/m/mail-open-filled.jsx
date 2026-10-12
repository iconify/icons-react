import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8sn5607z.css';
import '../../css/p/puqsb9b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8sn5607z"/><path class="puqsb9b7d"/>`,
		"fallback": "lucide-extended:mail-open-filled",
	});
}

export default Component;
