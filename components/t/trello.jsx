import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gwugs5bdj.css';
import '../../css/e/e570eeb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gwugs5bdj"/><path class="e570eeb8k"/></g>`,
		"fallback": "iconoir:trello",
	});
}

export default Component;
