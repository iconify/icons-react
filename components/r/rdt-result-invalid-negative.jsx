import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8f7u0bby.css';
import '../../css/d/d5tx2fx1j.css';
import '../../css/j/jxt58o6cf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultInvalidNegative0)" class="cuyn6tgcc"><path class="r8f7u0bby"/><path clip-rule="evenodd" class="d5tx2fx1j"/><path clip-rule="evenodd" class="jxt58o6cf"/></g><defs><clipPath id="healthiconsRdtResultInvalidNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:rdt-result-invalid-negative",
	});
}

export default Component;
