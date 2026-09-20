import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yljdd-biq.css';
import '../../css/c/cqlg1elow.css';
import '../../css/m/mqymo7s1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yljdd-biq"/><path class="cqlg1elow"/><path class="mqymo7s1u"/>`,
		"fallback": "selfhst:radicle-light",
	});
}

export default Component;
