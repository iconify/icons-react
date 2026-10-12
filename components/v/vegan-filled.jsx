import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8idyf61c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n8idyf61c"/>`,
		"fallback": "lucide-extended:vegan-filled",
	});
}

export default Component;
