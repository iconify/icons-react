import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxaxxdb7l.css';
import '../../css/x/xyzy_tbmx.css';
import '../../css/q/q56cueczx.css';
import '../../css/b/b81wd4bns.css';
import '../../css/q/q4cd8jakj.css';
import '../../css/o/o06jzmb8e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxaxxdb7l"/><path class="xyzy_tbmx"/><path class="q56cueczx"/><path class="b81wd4bns"/><path class="q4cd8jakj"/><path class="o06jzmb8e"/>`,
		"fallback": "energy-icons:solar-panel-x-20",
	});
}

export default Component;
