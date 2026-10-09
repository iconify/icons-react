import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwg6nmvzy.css';
import '../../css/k/k1o0uibpr.css';
import '../../css/a/a2v302bpg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwg6nmvzy"/><path class="k1o0uibpr"/><path class="a2v302bpg"/>`,
		"fallback": "energy-icons:solar-panel-bolt-20",
	});
}

export default Component;
