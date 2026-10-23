import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ce1bxtcow.css';
import '../../css/s/sf5u-0bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ce1bxtcow"/><path class="sf5u-0bvd"/></g>`,
		"fallback": "vadivam:paint-bucket",
	});
}

export default Component;
