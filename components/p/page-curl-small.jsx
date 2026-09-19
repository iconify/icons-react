import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esgs_iocj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esgs_iocj"/>`,
		"fallback": "dinkie-icons:page-curl-small",
	});
}

export default Component;
