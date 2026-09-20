import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7zrtccmu.css';
import '../../css/z/zd5_1s5gb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o7zrtccmu"/><path class="zd5_1s5gb"/></g>`,
		"fallback": "tabler:table-alias",
	});
}

export default Component;
