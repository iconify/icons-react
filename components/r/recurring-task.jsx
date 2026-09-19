import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg4m7ypgu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg4m7ypgu"/>`,
		"fallback": "fluent-mdl2:recurring-task",
	});
}

export default Component;
