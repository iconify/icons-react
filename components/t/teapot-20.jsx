import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goypvvxbh.css';
import '../../css/j/j7u6kob3r.css';
import '../../css/j/j96filblj.css';
import '../../css/j/jc895qbom.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goypvvxbh"/><path class="j7u6kob3r"/><path class="j96filblj"/><path class="jc895qbom"/>`,
		"fallback": "energy-icons:teapot-20",
	});
}

export default Component;
