import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl9k6ubdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl9k6ubdo"/>`,
		"fallback": "simple-icons:talend",
	});
}

export default Component;
