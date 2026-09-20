import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdncy1bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdncy1bly"/>`,
		"fallback": "lets-icons:setting-line-light",
	});
}

export default Component;
