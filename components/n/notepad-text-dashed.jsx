import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8sja11us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8sja11us"/>`,
		"fallback": "lucide:notepad-text-dashed",
	});
}

export default Component;
