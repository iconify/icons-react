import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak3byoaiu.css';
import '../../css/q/qsjon_xqs.css';
import '../../css/e/es1i79bpz.css';
import '../../css/l/lbss1-iny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ak3byoaiu"/><rect class="qsjon_xqs"/><rect class="es1i79bpz"/><rect class="lbss1-iny"/>`,
		"fallback": "selfhst:opencaptions",
	});
}

export default Component;
