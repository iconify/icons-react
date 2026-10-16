import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-krkroqv.css';
import '../../css/m/mvm0xqozd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-krkroqv"/><path class="mvm0xqozd"/>`,
		"fallback": "energy-icons:secondary-substation-48-bold",
	});
}

export default Component;
