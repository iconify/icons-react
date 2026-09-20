import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foawy0bhr.css';
import '../../css/j/jb0d_iq9v.css';
import '../../css/w/w38m_pb8z.css';
import '../../css/p/p-qfsebno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foawy0bhr"/><path class="jb0d_iq9v"/><path class="w38m_pb8z"/><path class="p-qfsebno"/>`,
		"fallback": "selfhst:microsoft-defender-2020-light",
	});
}

export default Component;
