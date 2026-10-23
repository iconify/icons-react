import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i83j8qbjd.css';
import '../../css/u/ugjw2tulu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i83j8qbjd"/><path class="ugjw2tulu"/></g>`,
		"fallback": "vadivam:panda",
	});
}

export default Component;
