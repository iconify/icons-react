import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzhwxisqb.css';
import '../../css/w/wvrzkzbvb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzhwxisqb"/><path class="wvrzkzbvb"/>`,
		"fallback": "energy-icons:molten-salt-48-bold",
	});
}

export default Component;
