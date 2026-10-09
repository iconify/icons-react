import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oblc-wbem.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oblc-wbem"/><path class="f5bqv3-2b"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:pets-allowed-48",
	});
}

export default Component;
