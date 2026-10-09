import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur9gjri0x.css';
import '../../css/w/wom-shbgk.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur9gjri0x"/><path class="wom-shbgk"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:mail-check-48-bold",
	});
}

export default Component;
