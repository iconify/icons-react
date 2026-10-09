import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sadb4lb0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sadb4lb0j"/>`,
		"fallback": "energy-icons:scan-face-48",
	});
}

export default Component;
