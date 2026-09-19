import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5vdclnqy.css';
import '../../css/o/ot7rdzb2f.css';
import '../../css/b/bdg0p2bxg.css';
import '../../css/l/l_6g95bgy.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5vdclnqy"/><path class="ot7rdzb2f"/><path class="bdg0p2bxg"/><path class="l_6g95bgy"/>`,
		"fallback": "flag:sr-4x3",
	});
}

export default Component;
