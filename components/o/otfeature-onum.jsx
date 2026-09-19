import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofmqj7vhw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofmqj7vhw"/>`,
		"fallback": "dinkie-icons:otfeature-onum",
	});
}

export default Component;
