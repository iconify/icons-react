import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7_gw7lhp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7_gw7lhp"/>`,
		"fallback": "fluent-mdl2:mail-forward-mirrored",
	});
}

export default Component;
