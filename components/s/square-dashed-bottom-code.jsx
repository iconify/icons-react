import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zp-dt5stl.css';
import '../../css/i/iujr_mbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zp-dt5stl"/><path class="iujr_mbsn"/></g>`,
		"fallback": "vadivam:square-dashed-bottom-code",
	});
}

export default Component;
