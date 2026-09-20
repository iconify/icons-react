import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bks8__b-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bks8__b-f"/>`,
		"fallback": "selfhst:micro-center-light",
	});
}

export default Component;
