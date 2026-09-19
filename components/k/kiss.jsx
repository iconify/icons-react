import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sez7-guzw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sez7-guzw"/>`,
		"fallback": "fa7-solid:kiss",
	});
}

export default Component;
