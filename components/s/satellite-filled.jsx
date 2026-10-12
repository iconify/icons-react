import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8furxbvt.css';
import '../../css/o/oe3ikkuio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8furxbvt"/><path clip-rule="evenodd" class="oe3ikkuio"/>`,
		"fallback": "lucide-extended:satellite-filled",
	});
}

export default Component;
