import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kep1zf04e.css';
import '../../css/n/na94o3ufs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kep1zf04e"/><path class="na94o3ufs"/>`,
		"fallback": "gis:map-user",
	});
}

export default Component;
