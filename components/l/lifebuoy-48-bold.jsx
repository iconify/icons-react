import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/q/qkvjsbbnn.css';
import '../../css/d/dgzfmhbff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="qkvjsbbnn"/><path class="dgzfmhbff"/>`,
		"fallback": "energy-icons:lifebuoy-48-bold",
	});
}

export default Component;
