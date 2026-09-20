import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8oo8ds2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8oo8ds2t"/>`,
		"fallback": "simple-icons:wattpad",
	});
}

export default Component;
