import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mniqmdgfa.css';
import '../../css/o/onpzv9a2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mniqmdgfa"/><path class="onpzv9a2a"/>`,
		"fallback": "energy-icons:server-48",
	});
}

export default Component;
