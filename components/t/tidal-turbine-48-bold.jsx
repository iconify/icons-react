import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9nvmf1iv.css';
import '../../css/f/fca5_bcqu.css';
import '../../css/i/iqtmhgbcj.css';
import '../../css/c/c8fwwvt5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9nvmf1iv"/><path class="fca5_bcqu"/><path class="iqtmhgbcj"/><path class="c8fwwvt5o"/>`,
		"fallback": "energy-icons:tidal-turbine-48-bold",
	});
}

export default Component;
