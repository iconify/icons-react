import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6_oaacrp.css';
import '../../css/z/znp8eubox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6_oaacrp"/><path class="znp8eubox"/>`,
		"fallback": "selfhst:medassist",
	});
}

export default Component;
