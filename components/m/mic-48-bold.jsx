import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu7f3lbhq.css';
import '../../css/f/fzl-y-qur.css';
import '../../css/b/bg9q4obqt.css';
import '../../css/q/qpoqx3b8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu7f3lbhq"/><path class="fzl-y-qur"/><path class="bg9q4obqt"/><path class="qpoqx3b8c"/>`,
		"fallback": "energy-icons:mic-48-bold",
	});
}

export default Component;
