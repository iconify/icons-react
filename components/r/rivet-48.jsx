import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvj4h6twa.css';
import '../../css/s/sy5tukbrx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvj4h6twa"/><path class="sy5tukbrx"/>`,
		"fallback": "energy-icons:rivet-48",
	});
}

export default Component;
