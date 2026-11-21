import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl153uk6t.css';
import '../../css/r/rv21otbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl153uk6t"/><path class="rv21otbpy"/>`,
		"fallback": "lucide-extended:layer-arrow-down-filled",
	});
}

export default Component;
