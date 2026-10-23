import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypbg_2eib.css';
import '../../css/k/kh6xzacoo.css';
import '../../css/w/wjqwatbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ypbg_2eib"/><path class="kh6xzacoo"/><path class="wjqwatbct"/></g>`,
		"fallback": "vadivam:turntable",
	});
}

export default Component;
