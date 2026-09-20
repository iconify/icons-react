import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpb7yibku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpb7yibku"/>`,
		"fallback": "selfhst:teleport",
	});
}

export default Component;
