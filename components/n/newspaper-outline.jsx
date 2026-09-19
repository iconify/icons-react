import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu1g5acvh.css';
import '../../css/k/kq1i8jlgx.css';
import '../../css/q/qbfao4-vr.css';
import '../../css/r/rbqpjolra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu1g5acvh"/><path class="kq1i8jlgx"/><path class="qbfao4-vr"/><path class="rbqpjolra"/>`,
		"fallback": "famicons:newspaper-outline",
	});
}

export default Component;
