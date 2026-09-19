import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho0-29b5y.css';
import '../../css/v/vhbe095-l.css';
import '../../css/x/xa-305ipw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho0-29b5y"/><path class="vhbe095-l"/><path class="xa-305ipw"/>`,
		"fallback": "ion:social-designernews-outline",
	});
}

export default Component;
