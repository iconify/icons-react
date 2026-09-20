import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clrj_mvqf.css';
import '../../css/a/ay6n8vh9w.css';
import '../../css/v/v2bqu0buz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clrj_mvqf"/><path class="ay6n8vh9w"/><path class="v2bqu0buz"/>`,
		"fallback": "selfhst:pdfmathtranslate",
	});
}

export default Component;
