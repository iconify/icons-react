import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cexdorbqf.css';
import '../../css/l/l0e6trbdo.css';
import '../../css/a/aqt55lrii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cexdorbqf"/><path class="l0e6trbdo"/><path class="aqt55lrii"/>`,
		"fallback": "energy-icons:package-48-bold",
	});
}

export default Component;
