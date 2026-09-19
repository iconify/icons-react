import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ous1cc4fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ous1cc4fm"/>`,
		"fallback": "healthicons:paved-road-alt-outline-24px",
	});
}

export default Component;
