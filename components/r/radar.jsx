import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xr_5xg10s.css';
import '../../css/f/ftlh4p7ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xr_5xg10s"/><path class="ftlh4p7ox"/></g>`,
		"fallback": "vadivam:radar",
	});
}

export default Component;
