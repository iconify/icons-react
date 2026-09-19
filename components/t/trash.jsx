import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e56rnvsiz.css';
import '../../css/d/dqy3eyidd.css';
import '../../css/u/uh57q-l3l.css';
import '../../css/q/qiqxy6bex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e56rnvsiz"/><path class="dqy3eyidd"/><path class="uh57q-l3l"/><path class="qiqxy6bex"/>`,
		"fallback": "formkit:trash",
	});
}

export default Component;
