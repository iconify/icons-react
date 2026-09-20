import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5a8_trli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5a8_trli"/>`,
		"fallback": "selfhst:modrinth",
	});
}

export default Component;
