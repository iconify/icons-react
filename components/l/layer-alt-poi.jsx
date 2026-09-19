import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szdg7sb9v.css';
import '../../css/i/inw9uqdux.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szdg7sb9v"/><path class="inw9uqdux"/>`,
		"fallback": "gis:layer-alt-poi",
	});
}

export default Component;
