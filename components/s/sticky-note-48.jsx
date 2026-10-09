import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_3b78b5d.css';
import '../../css/w/w80p7wbue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_3b78b5d"/><path class="w80p7wbue"/>`,
		"fallback": "energy-icons:sticky-note-48",
	});
}

export default Component;
