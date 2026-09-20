import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqy19wbvc.css';
import '../../css/q/qe0d046kd.css';
import '../../css/a/atzomcwel.css';

const viewBox = {"width":256,"height":271};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqy19wbvc"/><path class="qe0d046kd"/><path class="atzomcwel"/>`,
		"fallback": "thesvg-color:pulumi",
	});
}

export default Component;
