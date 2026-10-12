import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l46kpabms.css';
import '../../css/v/vca0g8bfr.css';
import '../../css/q/q9qit9bpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l46kpabms"/><path class="vca0g8bfr"/><path class="q9qit9bpf"/>`,
		"fallback": "energy-icons:split-48-bold",
	});
}

export default Component;
