import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghgrl9bnl.css';
import '../../css/q/qcs6rdphe.css';
import '../../css/x/xpp-7oufq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghgrl9bnl"/><path class="qcs6rdphe"/><path class="xpp-7oufq"/>`,
		"fallback": "energy-icons:offshore-platform-48-bold",
	});
}

export default Component;
