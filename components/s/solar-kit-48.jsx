import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8zhq3bqa.css';
import '../../css/k/k3148ab8q.css';
import '../../css/x/xmpbrx25v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8zhq3bqa"/><path class="k3148ab8q"/><path class="xmpbrx25v"/>`,
		"fallback": "energy-icons:solar-kit-48",
	});
}

export default Component;
