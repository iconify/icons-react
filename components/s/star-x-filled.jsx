import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew50tebjg.css';
import '../../css/n/n4qsi-ucz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew50tebjg"/><path class="n4qsi-ucz"/>`,
		"fallback": "lucide-extended:star-x-filled",
	});
}

export default Component;
