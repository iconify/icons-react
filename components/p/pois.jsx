import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7muz-b4d.css';
import '../../css/l/l7pghdblc.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7muz-b4d"/><path class="l7pghdblc"/>`,
		"fallback": "gis:pois",
	});
}

export default Component;
