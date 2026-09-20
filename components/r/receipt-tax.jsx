import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yuaib8bbv.css';
import '../../css/z/zz0udab_i.css';
import '../../css/d/dy_8-wb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yuaib8bbv"/><path class="zz0udab_i"/><path class="dy_8-wb5v"/></g>`,
		"fallback": "tabler:receipt-tax",
	});
}

export default Component;
