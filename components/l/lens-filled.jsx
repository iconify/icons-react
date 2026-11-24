import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztuy0owhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ztuy0owhl"/>`,
		"fallback": "lucide-extended:lens-filled",
	});
}

export default Component;
