import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hor9gzzrv.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hor9gzzrv"/>`,
		"fallback": "fa-solid:road",
	});
}

export default Component;
