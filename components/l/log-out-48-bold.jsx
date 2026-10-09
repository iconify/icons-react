import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paacvi6ub.css';
import '../../css/d/dwbz_pxxl.css';
import '../../css/l/lr8y9s-tx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paacvi6ub"/><path class="dwbz_pxxl"/><path class="lr8y9s-tx"/>`,
		"fallback": "energy-icons:log-out-48-bold",
	});
}

export default Component;
