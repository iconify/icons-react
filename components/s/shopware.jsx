import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s859bnjcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s859bnjcm"/>`,
		"fallback": "thesvg-color:shopware",
	});
}

export default Component;
