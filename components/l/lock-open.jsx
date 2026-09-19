import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2ezezb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2ezezb4p"/>`,
		"fallback": "griddy-icons:lock-open",
	});
}

export default Component;
