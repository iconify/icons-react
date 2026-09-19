import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq2_-jbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq2_-jbje"/>`,
		"fallback": "ci:rows",
	});
}

export default Component;
