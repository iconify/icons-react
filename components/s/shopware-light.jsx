import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbgd9ibyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbgd9ibyr"/>`,
		"fallback": "selfhst:shopware-light",
	});
}

export default Component;
