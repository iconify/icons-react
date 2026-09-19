import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s73i_9bvd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s73i_9bvd"/>`,
		"fallback": "dinkie-icons:unicode",
	});
}

export default Component;
