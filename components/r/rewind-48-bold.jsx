import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3pwufbep.css';
import '../../css/i/ifs4a46sv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3pwufbep"/><path class="ifs4a46sv"/>`,
		"fallback": "energy-icons:rewind-48-bold",
	});
}

export default Component;
