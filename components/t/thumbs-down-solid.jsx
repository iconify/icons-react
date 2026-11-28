import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfpk53bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfpk53bjw"/>`,
		"fallback": "iconaut:thumbs-down-solid",
	});
}

export default Component;
