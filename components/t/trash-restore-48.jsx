import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8qaagfdl.css';
import '../../css/v/vqmz5ehmr.css';
import '../../css/e/ecunmc8kn.css';
import '../../css/o/o46a8ibtl.css';
import '../../css/a/af-1brbju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8qaagfdl"/><path class="vqmz5ehmr"/><path class="ecunmc8kn"/><path class="o46a8ibtl"/><path class="af-1brbju"/>`,
		"fallback": "energy-icons:trash-restore-48",
	});
}

export default Component;
