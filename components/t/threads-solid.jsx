import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz9_7etcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz9_7etcv"/>`,
		"fallback": "iconaut:threads-solid",
	});
}

export default Component;
