import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3nbakb9b.css';
import '../../css/l/lsid_0bha.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3nbakb9b"/><path class="lsid_0bha"/>`,
		"fallback": "geo:turf-size",
	});
}

export default Component;
