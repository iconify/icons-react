import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdjingb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdjingb7f"/>`,
		"fallback": "healthicons:paved-road-alt-24px",
	});
}

export default Component;
