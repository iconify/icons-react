import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se_pfbimu.css';
import '../../css/n/n4qsi-ucz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se_pfbimu"/><path class="n4qsi-ucz"/>`,
		"fallback": "lucide-extended:star-x-filled",
	});
}

export default Component;
