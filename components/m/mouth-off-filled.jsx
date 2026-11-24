import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfza2kq2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfza2kq2n"/>`,
		"fallback": "lucide-extended:mouth-off-filled",
	});
}

export default Component;
