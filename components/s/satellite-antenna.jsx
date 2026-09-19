import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii0e4j_mh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii0e4j_mh"/>`,
		"fallback": "dinkie-icons:satellite-antenna",
	});
}

export default Component;
