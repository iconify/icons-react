import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nymrah1gn.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nymrah1gn"/>`,
		"fallback": "jam:power",
	});
}

export default Component;
