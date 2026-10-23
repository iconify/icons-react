import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvxwe742c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvxwe742c"/>`,
		"fallback": "vadivam:lightbulb-off",
	});
}

export default Component;
