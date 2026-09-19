import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkf8qty-z.css';
import '../../css/v/vesdzd76m.css';
import '../../css/d/d3q31ibwf.css';
import '../../css/j/jn0tgzb0v.css';
import '../../css/s/svm6icbxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kkf8qty-z"/><path class="vesdzd76m"/><path class="d3q31ibwf"/><path class="jn0tgzb0v"/><path class="svm6icbxq"/></g>`,
		"fallback": "fluent-emoji-flat:tiger",
	});
}

export default Component;
