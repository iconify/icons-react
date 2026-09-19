import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfxfn_o5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfxfn_o5s"/>`,
		"fallback": "ion:md-heart-half",
	});
}

export default Component;
