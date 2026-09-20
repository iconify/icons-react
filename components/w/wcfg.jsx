import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nom5wvdvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nom5wvdvk"/>`,
		"fallback": "token:wcfg",
	});
}

export default Component;
