import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k18nmbumu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k18nmbumu"/>`,
		"fallback": "solar:videocamera-record-bold",
	});
}

export default Component;
