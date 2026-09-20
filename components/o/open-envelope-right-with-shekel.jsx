import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_6nx6bhj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_6nx6bhj"/>`,
		"fallback": "pinhead:open-envelope-right-with-shekel",
	});
}

export default Component;
