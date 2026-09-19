import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umng054pb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umng054pb"/>`,
		"fallback": "dinkie-icons:train",
	});
}

export default Component;
