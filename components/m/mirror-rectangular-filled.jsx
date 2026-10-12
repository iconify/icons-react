import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4xhtv3en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4xhtv3en"/>`,
		"fallback": "lucide-extended:mirror-rectangular-filled",
	});
}

export default Component;
