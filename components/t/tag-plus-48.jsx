import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzs0rf_ry.css';
import '../../css/s/sw8ci2hap.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzs0rf_ry"/><path class="sw8ci2hap"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:tag-plus-48",
	});
}

export default Component;
