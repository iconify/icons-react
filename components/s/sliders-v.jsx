import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuj0oo5gw.css';
import '../../css/v/vr9r2nw0d.css';
import '../../css/v/vllgg5aaa.css';
import '../../css/s/s50j-khsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuj0oo5gw"/><path class="vr9r2nw0d"/><path class="vllgg5aaa"/><path class="s50j-khsu"/>`,
		"fallback": "prime:sliders-v",
	});
}

export default Component;
