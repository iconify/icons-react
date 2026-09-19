import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/s/soqzb4g1r.css';
import '../../css/p/p7nsoob7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="soqzb4g1r"/><path class="p7nsoob7t"/></g>`,
		"fallback": "catppuccin:typescript",
	});
}

export default Component;
