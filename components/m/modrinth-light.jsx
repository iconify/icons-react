import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgnz_7dgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgnz_7dgm"/>`,
		"fallback": "selfhst:modrinth-light",
	});
}

export default Component;
