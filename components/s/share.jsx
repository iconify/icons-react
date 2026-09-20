import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ugw1omula.css';
import '../../css/m/m5wsf8blc.css';
import '../../css/x/xjh3njbok.css';
import '../../css/f/f6x_p4ruw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ugw1omula"/><circle class="m5wsf8blc"/><circle class="xjh3njbok"/><path class="f6x_p4ruw"/></g>`,
		"fallback": "meteor-icons:share",
	});
}

export default Component;
