import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn2830bka.css';
import '../../css/v/vgycreacb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn2830bka"/><path class="vgycreacb"/>`,
		"fallback": "gis:layer-stat-alt",
	});
}

export default Component;
