import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk_olrbkj.css';
import '../../css/w/wkqj1nbqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk_olrbkj"/><path class="wkqj1nbqz"/>`,
		"fallback": "energy-icons:upload-cloud-48-bold",
	});
}

export default Component;
