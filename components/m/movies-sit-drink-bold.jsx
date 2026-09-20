import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx3y42bar.css';
import '../../css/b/bub6_kbew.css';
import '../../css/f/f9dyx4nnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx3y42bar"/><path class="bub6_kbew"/><path class="f9dyx4nnp"/>`,
		"fallback": "streamline-ultimate:movies-sit-drink-bold",
	});
}

export default Component;
