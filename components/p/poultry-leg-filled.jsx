import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfjfv46mq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfjfv46mq"/>`,
		"fallback": "dinkie-icons:poultry-leg-filled",
	});
}

export default Component;
