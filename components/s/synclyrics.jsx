import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj1lvn23t.css';
import '../../css/e/eionscb5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj1lvn23t"/><path class="eionscb5u"/>`,
		"fallback": "selfhst:synclyrics",
	});
}

export default Component;
