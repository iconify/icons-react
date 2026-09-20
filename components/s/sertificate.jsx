import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/h-7l7pzjd.css';
import '../../css/z/zxovm7bti.css';
import '../../css/r/rh76ybc_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="h-7l7pzjd"/><circle class="zxovm7bti"/><path class="rh76ybc_a"/></g>`,
		"fallback": "lets-icons:sertificate",
	});
}

export default Component;
