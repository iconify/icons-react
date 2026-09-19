import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpos9jrlq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpos9jrlq"/>`,
		"fallback": "gis:layer-stat",
	});
}

export default Component;
