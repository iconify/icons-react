import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfzk-m7le.css';
import '../../css/s/s4tacdvsa.css';
import '../../css/w/wabb2o_wh.css';
import '../../css/g/gsl21kb0m.css';
import '../../css/c/cijt8bpva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfzk-m7le"/><path class="s4tacdvsa"/><path class="wabb2o_wh"/><path class="gsl21kb0m"/><path class="cijt8bpva"/>`,
		"fallback": "energy-icons:island-20-bold",
	});
}

export default Component;
