import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj6mhoj0l.css';
import '../../css/h/h693acg_w.css';
import '../../css/a/awabczrgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj6mhoj0l"/><path class="h693acg_w"/><path class="awabczrgy"/>`,
		"fallback": "streamline-ultimate:single-neutral-folder-box-bold",
	});
}

export default Component;
