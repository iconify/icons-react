import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fag_tsbej.css';
import '../../css/i/iz5bv-bjz.css';
import '../../css/o/oc-waz6tn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fag_tsbej"/><path class="iz5bv-bjz"/><path class="oc-waz6tn"/>`,
		"fallback": "energy-icons:safety-boot-48",
	});
}

export default Component;
