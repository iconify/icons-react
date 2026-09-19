import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng6ptzbdb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng6ptzbdb"/>`,
		"fallback": "carbon:vehicle-services",
	});
}

export default Component;
