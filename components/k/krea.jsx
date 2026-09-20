import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m2gy684ya.css';
import '../../css/m/md4gp-bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m2gy684ya"/><path class="md4gp-bjv"/></g>`,
		"fallback": "thesvg:krea",
	});
}

export default Component;
