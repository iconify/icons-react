import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbtde-eiv.css';
import '../../css/h/hyrwp_buz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mbtde-eiv"/><path class="hyrwp_buz"/></g>`,
		"fallback": "ant-design:merge-outlined",
	});
}

export default Component;
