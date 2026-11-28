import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grs1shbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grs1shbxi"/>`,
		"fallback": "iconaut:magnet-solid",
	});
}

export default Component;
