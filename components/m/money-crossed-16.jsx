import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6ja28kow.css';
import '../../css/q/q6as41mwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6ja28kow"/><path clip-rule="evenodd" class="q6as41mwh"/>`,
		"fallback": "qlementine-icons:money-crossed-16",
	});
}

export default Component;
