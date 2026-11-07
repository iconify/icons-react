import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_kh4ijio.css';
import '../../css/p/phstewbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_kh4ijio"/><path class="phstewbwu"/>`,
		"fallback": "solar:minus-bold-duotone",
	});
}

export default Component;
