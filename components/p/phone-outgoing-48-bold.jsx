import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5idgqqvy.css';
import '../../css/b/b2ubuucrp.css';
import '../../css/q/qfey2lb7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5idgqqvy"/><path class="b2ubuucrp"/><path class="qfey2lb7e"/>`,
		"fallback": "energy-icons:phone-outgoing-48-bold",
	});
}

export default Component;
