import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiqnuhsan.css';
import '../../css/z/zzrqikhhv.css';
import '../../css/h/hb-shkb1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiqnuhsan"/><path class="zzrqikhhv"/><path class="hb-shkb1m"/>`,
		"fallback": "energy-icons:synchronous-condenser-20",
	});
}

export default Component;
