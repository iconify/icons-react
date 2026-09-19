import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpj_gzx8a.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpj_gzx8a"/>`,
		"fallback": "zmdi:picture-in-picture",
	});
}

export default Component;
