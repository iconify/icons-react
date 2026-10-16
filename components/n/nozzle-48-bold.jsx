import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jocyyo5fc.css';
import '../../css/n/nhe1boyvm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jocyyo5fc"/><path class="nhe1boyvm"/>`,
		"fallback": "energy-icons:nozzle-48-bold",
	});
}

export default Component;
