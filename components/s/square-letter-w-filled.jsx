import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhpqqbzko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lhpqqbzko"/>`,
		"fallback": "lucide-extended:square-letter-w-filled",
	});
}

export default Component;
