import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vexeu9b6w.css';
import '../../css/z/zy42k2b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vexeu9b6w"/><path class="zy42k2b2f"/></g>`,
		"fallback": "vadivam:shield-user",
	});
}

export default Component;
