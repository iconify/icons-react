import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oytsnpbqo.css';
import '../../css/u/ukrhpwb6i.css';
import '../../css/q/qe32f93df.css';
import '../../css/g/g_ou44-_q.css';
import '../../css/v/vk9n4wbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oytsnpbqo"/><path class="ukrhpwb6i"/><g clip-rule="evenodd" class="qe32f93df"><path class="g_ou44-_q"/><path class="vk9n4wbgp"/></g>`,
		"fallback": "solar:stars-line-bold-duotone",
	});
}

export default Component;
