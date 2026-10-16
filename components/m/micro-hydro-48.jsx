import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mexbaph4c.css';
import '../../css/c/c89fhw9bu.css';
import '../../css/l/lm4-qnbeh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mexbaph4c"/><path class="c89fhw9bu"/><path class="lm4-qnbeh"/>`,
		"fallback": "energy-icons:micro-hydro-48",
	});
}

export default Component;
