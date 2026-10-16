import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvt6cd8su.css';
import '../../css/x/x9k0s653n.css';
import '../../css/w/wyuy4ccbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvt6cd8su"/><path class="x9k0s653n"/><path class="wyuy4ccbq"/>`,
		"fallback": "energy-icons:train-station-48",
	});
}

export default Component;
