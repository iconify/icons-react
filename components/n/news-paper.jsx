import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b9z7cudnn.css';
import '../../css/b/bpy02gbfv.css';
import '../../css/g/g283zub3h.css';
import '../../css/a/a3ajfwrrx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="b9z7cudnn"/><path class="bpy02gbfv"/><path class="g283zub3h"/><path class="a3ajfwrrx"/></g>`,
		"fallback": "streamline-plump:news-paper",
	});
}

export default Component;
