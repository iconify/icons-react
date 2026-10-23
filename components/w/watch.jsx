import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yguu1np7c.css';
import '../../css/g/gb43h51_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yguu1np7c"/><path class="gb43h51_r"/></g>`,
		"fallback": "vadivam:watch",
	});
}

export default Component;
