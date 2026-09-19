import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ndoug0ixa.css';
import '../../css/u/uelz-2vlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ndoug0ixa"/><circle class="uelz-2vlp"/></g>`,
		"fallback": "akar-icons:toggle-off",
	});
}

export default Component;
