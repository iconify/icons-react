import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1-5a6jdl.css';
import '../../css/j/jj_zol4wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1-5a6jdl"/><path class="jj_zol4wm"/>`,
		"fallback": "nrk:tilgjengelighet-lydtekst",
	});
}

export default Component;
