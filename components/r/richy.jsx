import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uio9qibqb.css';
import '../../css/j/jcy41ac7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="uio9qibqb"/><path class="jcy41ac7s"/>`,
		"fallback": "selfhst:richy",
	});
}

export default Component;
