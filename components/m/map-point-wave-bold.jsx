import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzflwis8e.css';
import '../../css/a/a-jc6dbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzflwis8e"/><path clip-rule="evenodd" class="a-jc6dbnm"/>`,
		"fallback": "solar:map-point-wave-bold",
	});
}

export default Component;
