import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/kgsk8t.css';
import '../../css/d/d-j1qi.css';
import '../../css/n/neinwl.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c kgsk8t"/><path class="a0m25c d-j1qi"/><path class="a0m25c neinwl"/>`,
		"fallback": "line-md:question-square",
	});
}

export default Component;
