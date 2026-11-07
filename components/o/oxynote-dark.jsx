import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm0ctg6ue.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm0ctg6ue"/>`,
		"fallback": "selfhst:oxynote-dark",
	});
}

export default Component;
