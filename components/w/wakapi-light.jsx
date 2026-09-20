import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v55dtpj9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v55dtpj9d"/>`,
		"fallback": "selfhst:wakapi-light",
	});
}

export default Component;
