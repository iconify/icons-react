import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prk0eb3-z.css';
import '../../css/w/w4wifcf1d.css';
import '../../css/i/iagcdmkde.css';
import '../../css/u/uwtspp4wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="prk0eb3-z"/><path class="w4wifcf1d"/><path class="iagcdmkde"/><path class="uwtspp4wr"/>`,
		"fallback": "solar:suitcase-tag-bold",
	});
}

export default Component;
