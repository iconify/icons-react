import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md8a7y_mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md8a7y_mz"/>`,
		"fallback": "uil:map",
	});
}

export default Component;
