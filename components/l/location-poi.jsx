import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stgrhqeqj.css';
import '../../css/k/k1_3dpb1f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stgrhqeqj"/><path class="k1_3dpb1f"/>`,
		"fallback": "gis:location-poi",
	});
}

export default Component;
