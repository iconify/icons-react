import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzh-h4k4i.css';
import '../../css/l/lvvelyb5g.css';
import '../../css/r/r9j5p4bxh.css';
import '../../css/u/ux587345u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzh-h4k4i"/><path class="lvvelyb5g"/><path class="r9j5p4bxh"/><path class="ux587345u"/>`,
		"fallback": "energy-icons:soil-48",
	});
}

export default Component;
