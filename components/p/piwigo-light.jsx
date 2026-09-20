import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tin4jwbsk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tin4jwbsk"/>`,
		"fallback": "selfhst:piwigo-light",
	});
}

export default Component;
