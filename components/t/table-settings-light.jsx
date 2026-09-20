import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1jsd5b9l.css';
import '../../css/l/l2x8y2o4j.css';
import '../../css/q/qwyxqjp2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z1jsd5b9l"/><path class="l2x8y2o4j"/><circle class="qwyxqjp2k"/></g>`,
		"fallback": "lets-icons:table-settings-light",
	});
}

export default Component;
