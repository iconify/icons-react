import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmh_o2bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jmh_o2bqz"/>`,
		"fallback": "lucide-extended:square-library-filled",
	});
}

export default Component;
