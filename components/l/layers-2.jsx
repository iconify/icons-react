import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gv1tm_b2l.css';
import '../../css/m/m_z8d5b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gv1tm_b2l"/><path class="m_z8d5b-w"/></g>`,
		"fallback": "vadivam:layers-2",
	});
}

export default Component;
