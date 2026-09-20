import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzui5gb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzui5gb6p"/>`,
		"fallback": "reicon:maximize7",
	});
}

export default Component;
