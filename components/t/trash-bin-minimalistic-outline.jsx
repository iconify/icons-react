import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdlwsowkl.css';
import '../../css/f/fib6k6-vs.css';
import '../../css/u/u3cpgbbrn.css';
import '../../css/i/ii8sfybxo.css';
import '../../css/j/jks_y-bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdlwsowkl"/><path class="fib6k6-vs"/><path class="u3cpgbbrn"/><path class="ii8sfybxo"/><path class="jks_y-bbw"/>`,
		"fallback": "solar:trash-bin-minimalistic-outline",
	});
}

export default Component;
