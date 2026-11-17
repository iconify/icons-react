import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8z6jub6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8z6jub6n"/>`,
		"fallback": "lucide-extended:route-arrow-right-filled",
	});
}

export default Component;
