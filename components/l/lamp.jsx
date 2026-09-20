import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxb5iw87w.css';
import '../../css/g/gbwktfjgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qxb5iw87w"/><path class="gbwktfjgd"/></g>`,
		"fallback": "lets-icons:lamp",
	});
}

export default Component;
