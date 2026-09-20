import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iycln-b8i.css';
import '../../css/m/m1ujwob9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="iycln-b8i"/><path class="m1ujwob9v"/>`,
		"fallback": "selfhst:podfetch",
	});
}

export default Component;
