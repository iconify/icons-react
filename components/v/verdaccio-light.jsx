import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac-mt5boh.css';
import '../../css/v/vxr1g-bus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac-mt5boh"/><path class="vxr1g-bus"/>`,
		"fallback": "selfhst:verdaccio-light",
	});
}

export default Component;
