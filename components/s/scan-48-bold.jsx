import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihdvcd13a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihdvcd13a"/>`,
		"fallback": "energy-icons:scan-48-bold",
	});
}

export default Component;
