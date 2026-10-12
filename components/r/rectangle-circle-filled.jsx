import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc9rjmb9n.css';
import '../../css/p/p7s3evb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vc9rjmb9n"/><path class="p7s3evb7x"/>`,
		"fallback": "lucide-extended:rectangle-circle-filled",
	});
}

export default Component;
