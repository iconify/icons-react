import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dao47mw-a.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dao47mw-a"/>`,
		"fallback": "dinkie-icons:saxophone",
	});
}

export default Component;
