import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmahmx75y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmahmx75y"/>`,
		"fallback": "selfhst:revolt-dark",
	});
}

export default Component;
