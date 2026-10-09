import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twx0_4--t.css';
import '../../css/s/s9uy0jb1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twx0_4--t"/><path class="s9uy0jb1d"/>`,
		"fallback": "energy-icons:silo-48",
	});
}

export default Component;
