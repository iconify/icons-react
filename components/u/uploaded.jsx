import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqaqtubwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqaqtubwt"/>`,
		"fallback": "simple-icons:uploaded",
	});
}

export default Component;
