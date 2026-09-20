import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whqq3tgkh.css';
import '../../css/g/gv56llbfh.css';
import '../../css/m/m42kwr70q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whqq3tgkh"/><path class="gv56llbfh"/><path class="m42kwr70q"/>`,
		"fallback": "streamline-pixel:interface-essential-wrench-1",
	});
}

export default Component;
