import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlsrljbwz.css';
import '../../css/k/ko3mi2bbn.css';
import '../../css/b/bc05qdnjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlsrljbwz"/><path class="ko3mi2bbn"/><path class="bc05qdnjo"/>`,
		"fallback": "energy-icons:shield-x-48",
	});
}

export default Component;
