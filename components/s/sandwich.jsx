import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m8ixb1byd.css';
import '../../css/n/n9ukfnb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m8ixb1byd"/><path class="n9ukfnb4g"/></g>`,
		"fallback": "vadivam:sandwich",
	});
}

export default Component;
