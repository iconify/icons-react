import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_8xx_b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_8xx_b4w"/>`,
		"fallback": "iconoir:maps-arrow-xmark",
	});
}

export default Component;
