import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qthvhvbbw.css';
import '../../css/s/swgrbdc6r.css';
import '../../css/o/o5prfsbhg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qthvhvbbw"/><path class="swgrbdc6r"/><path class="o5prfsbhg"/>`,
		"fallback": "energy-icons:sleet-48",
	});
}

export default Component;
