import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc19hobba.css';
import '../../css/g/gd6c7lbvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc19hobba"/><path class="gd6c7lbvr"/>`,
		"fallback": "selfhst:raneto-dark",
	});
}

export default Component;
