import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuk06n_9z.css';
import '../../css/n/ny6l1ubqo.css';
import '../../css/n/n82309b_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuk06n_9z"/><path class="ny6l1ubqo"/><path class="n82309b_n"/>`,
		"fallback": "energy-icons:jerrycan-48-bold",
	});
}

export default Component;
