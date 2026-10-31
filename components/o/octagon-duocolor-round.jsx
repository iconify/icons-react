import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lafxaf8vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lafxaf8vs"/>`,
		"fallback": "coolicons:octagon-duocolor-round",
	});
}

export default Component;
