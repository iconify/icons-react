import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgurcpj7h.css';
import '../../css/a/atrsdobrn.css';
import '../../css/o/omq70qpka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgurcpj7h"/><path class="atrsdobrn"/><path class="omq70qpka"/>`,
		"fallback": "selfhst:phanpy",
	});
}

export default Component;
