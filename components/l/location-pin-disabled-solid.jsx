import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3t0lctow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3t0lctow"/>`,
		"fallback": "streamline-plump:location-pin-disabled-solid",
	});
}

export default Component;
