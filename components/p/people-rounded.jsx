import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cqteb8bfj.css';
import '../../css/n/ng8wznwvh.css';
import '../../css/e/egtcd9rqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cqteb8bfj"/><path class="ng8wznwvh"/><path class="egtcd9rqq"/></g>`,
		"fallback": "iconoir:people-rounded",
	});
}

export default Component;
