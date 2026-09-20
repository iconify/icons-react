import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7henqb8t.css';
import '../../css/i/i4uu4rbhf.css';
import '../../css/h/hfygp1eni.css';
import '../../css/o/o6q2kvbfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t7henqb8t"/><path class="i4uu4rbhf"/><path class="hfygp1eni"/><path class="o6q2kvbfj"/></g>`,
		"fallback": "streamline-color:toilet-women",
	});
}

export default Component;
