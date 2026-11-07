import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vob1vf30q.css';
import '../../css/l/lcw7lzboe.css';
import '../../css/v/vr5_q7bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vob1vf30q"/><path class="lcw7lzboe"/><path clip-rule="evenodd" class="vr5_q7bwe"/>`,
		"fallback": "solar:user-cross-outline",
	});
}

export default Component;
