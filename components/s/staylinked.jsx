import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3q-8-ppq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3q-8-ppq"/>`,
		"fallback": "la:staylinked",
	});
}

export default Component;
