import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ak-cndbhs.css';
import '../../css/u/u-pkwccmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ak-cndbhs"/><path class="u-pkwccmm"/></g>`,
		"fallback": "reicon:phone-medical2",
	});
}

export default Component;
