import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4ea79bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k4ea79bqc"/>`,
		"fallback": "lucide-extended:rabbit-filled",
	});
}

export default Component;
