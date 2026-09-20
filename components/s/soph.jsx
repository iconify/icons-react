import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az1yykywn.css';
import '../../css/q/qsakwingg.css';
import '../../css/e/etpvzsbbj.css';
import '../../css/t/ta7lxibnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az1yykywn"/><path class="qsakwingg"/><path class="etpvzsbbj"/><path class="ta7lxibnk"/>`,
		"fallback": "token:soph",
	});
}

export default Component;
