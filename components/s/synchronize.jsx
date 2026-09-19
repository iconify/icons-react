import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrfs08bjl.css';
import '../../css/h/h999mzfzw.css';
import '../../css/p/pu-os2bbu.css';
import '../../css/c/c5wpdllfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrfs08bjl"/><path class="h999mzfzw"/><path class="pu-os2bbu"/><path class="c5wpdllfh"/>`,
		"fallback": "flat-color-icons:synchronize",
	});
}

export default Component;
