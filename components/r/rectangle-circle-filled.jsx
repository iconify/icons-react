import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvo1z902s.css';
import '../../css/p/p7s3evb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvo1z902s"/><path class="p7s3evb7x"/>`,
		"fallback": "lucide-extended:rectangle-circle-filled",
	});
}

export default Component;
