import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kh_o9fisc.css';
import '../../css/k/k8imupb7i.css';
import '../../css/b/bkr8cgb8a.css';
import '../../css/q/qds4ccb9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kh_o9fisc"/><path class="k8imupb7i"/><path class="bkr8cgb8a"/><path class="qds4ccb9w"/></g>`,
		"fallback": "streamline-plump-color:insurance-hand",
	});
}

export default Component;
