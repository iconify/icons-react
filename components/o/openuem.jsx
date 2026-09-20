import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqzar5xlv.css';
import '../../css/e/eo4l80r5n.css';
import '../../css/n/nd0_hkbiv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zqzar5xlv"/><path class="eo4l80r5n"/><path class="nd0_hkbiv"/>`,
		"fallback": "selfhst:openuem",
	});
}

export default Component;
