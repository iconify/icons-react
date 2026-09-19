import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-vi90bdp.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-vi90bdp"/>`,
		"fallback": "fa6-solid:layer-group",
	});
}

export default Component;
