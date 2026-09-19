import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdp7dm02j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdp7dm02j"/>`,
		"fallback": "gis:layer-landcover",
	});
}

export default Component;
