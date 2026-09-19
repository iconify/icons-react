import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyyydmbfg.css';
import '../../css/l/lk--g1e_g.css';
import '../../css/n/noishdbbf.css';
import '../../css/c/cu3zp1biq.css';
import '../../css/a/av9l-sbfw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyyydmbfg"/><path class="lk--g1e_g"/><path class="noishdbbf"/><path class="cu3zp1biq"/><path class="av9l-sbfw"/>`,
		"fallback": "carbon:thumbnail-preview",
	});
}

export default Component;
