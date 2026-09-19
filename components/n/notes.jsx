import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oxozorj5q.css';
import '../../css/m/mb8r-gcqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="oxozorj5q"/><path class="mb8r-gcqw"/></g>`,
		"fallback": "charm:notes",
	});
}

export default Component;
