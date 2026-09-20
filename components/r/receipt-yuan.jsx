import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wioc7cb7v.css';
import '../../css/b/b97gqjbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wioc7cb7v"/><path class="b97gqjbro"/></g>`,
		"fallback": "tabler:receipt-yuan",
	});
}

export default Component;
