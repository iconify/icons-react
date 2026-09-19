import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn7g7lbmo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn7g7lbmo"/>`,
		"fallback": "fluent-mdl2:internal-investigation",
	});
}

export default Component;
