import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vghbbfb2f.css';
import '../../css/p/pw56fm25u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vghbbfb2f"/><path class="pw56fm25u"/>`,
		"fallback": "energy-icons:pellet-boiler-48",
	});
}

export default Component;
