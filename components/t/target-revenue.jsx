import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljsebdbqo.css';
import '../../css/k/kb7eai5rm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljsebdbqo"/><path class="kb7eai5rm"/>`,
		"fallback": "lineicons:target-revenue",
	});
}

export default Component;
