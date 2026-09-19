import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c039ieb1s.css';
import '../../css/b/bgbvgebha.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c039ieb1s"/><path class="bgbvgebha"/></g>`,
		"fallback": "charm:quote",
	});
}

export default Component;
