import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifygpy9ra.css';
import '../../css/u/u5pn5hbvi.css';
import '../../css/g/gtf-_j63i.css';
import '../../css/k/kkf6gcoeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifygpy9ra"/><path class="u5pn5hbvi"/><path class="gtf-_j63i"/><path class="kkf6gcoeg"/>`,
		"fallback": "streamline-ultimate:volleyball-ball-bold",
	});
}

export default Component;
