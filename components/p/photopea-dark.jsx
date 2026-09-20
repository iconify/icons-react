import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojo9uubfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojo9uubfy"/>`,
		"fallback": "selfhst:photopea-dark",
	});
}

export default Component;
