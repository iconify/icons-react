import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndwbrqb_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndwbrqb_a"/>`,
		"fallback": "selfhst:lemmy-light",
	});
}

export default Component;
