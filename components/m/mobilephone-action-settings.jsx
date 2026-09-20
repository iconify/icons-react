import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q9pojxb5k.css';
import '../../css/e/endhulb8v.css';
import '../../css/q/qcfv3sa_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q9pojxb5k"/><path class="endhulb8v"/><path class="qcfv3sa_z"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-settings",
	});
}

export default Component;
