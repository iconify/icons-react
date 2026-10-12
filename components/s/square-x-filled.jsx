import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z71u6ob1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z71u6ob1m"/>`,
		"fallback": "lucide-extended:square-x-filled",
	});
}

export default Component;
