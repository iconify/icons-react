import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7axs0bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7axs0bsw"/>`,
		"fallback": "lucide-extended:mouse-pointer-2-filled",
	});
}

export default Component;
