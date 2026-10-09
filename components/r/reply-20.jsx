import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gypgls1dd.css';
import '../../css/e/ems1_nb1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gypgls1dd"/><path class="ems1_nb1x"/>`,
		"fallback": "energy-icons:reply-20",
	});
}

export default Component;
