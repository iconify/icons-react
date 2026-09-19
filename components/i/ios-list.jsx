import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4yb1lblo.css';
import '../../css/v/vyuq6bchh.css';
import '../../css/l/lnelmrbrq.css';
import '../../css/d/d0kvbdtzz.css';
import '../../css/p/pjn7sbb0g.css';
import '../../css/n/n1m5hcctc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o4yb1lblo"/><circle class="vyuq6bchh"/><circle class="lnelmrbrq"/><path class="d0kvbdtzz"/><path class="pjn7sbb0g"/><path class="n1m5hcctc"/>`,
		"fallback": "ion:ios-list",
	});
}

export default Component;
