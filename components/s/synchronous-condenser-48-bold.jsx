import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pedr4_bjp.css';
import '../../css/w/wk04f5vlf.css';
import '../../css/o/o6pwbnxip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pedr4_bjp"/><path class="wk04f5vlf"/><path class="o6pwbnxip"/>`,
		"fallback": "energy-icons:synchronous-condenser-48-bold",
	});
}

export default Component;
