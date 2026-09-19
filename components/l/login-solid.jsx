import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4nt_319i.css';
import '../../css/t/tv2_2htnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4nt_319i"/><path class="tv2_2htnq"/>`,
		"fallback": "basil:login-solid",
	});
}

export default Component;
