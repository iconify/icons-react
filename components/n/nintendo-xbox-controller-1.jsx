import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/c/c4aoecbmh.css';
import '../../css/q/qa0u3bcoj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="c4aoecbmh"/><path class="qa0u3bcoj"/></g>`,
		"fallback": "streamline-plump:nintendo-xbox-controller-1",
	});
}

export default Component;
