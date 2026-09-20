import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv_9jiofm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fv_9jiofm"/>`,
		"fallback": "si:table-rows-fill",
	});
}

export default Component;
