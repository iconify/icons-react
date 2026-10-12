import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1brf6mxa.css';
import '../../css/x/xou2jbzza.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1brf6mxa"/><path class="xou2jbzza"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:map-pin-plus-48",
	});
}

export default Component;
