import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9a09orqa.css';
import '../../css/x/xklhocbaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9a09orqa"/><path class="xklhocbaw"/>`,
		"fallback": "energy-icons:panel-left-open-48-bold",
	});
}

export default Component;
