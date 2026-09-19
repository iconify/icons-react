import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hquq0fqiw.css';

const viewBox = {"width":384,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hquq0fqiw"/>`,
		"fallback": "zmdi:layers",
	});
}

export default Component;
