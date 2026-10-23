import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gpm7scc6w.css';
import '../../css/h/hs8_-3v4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gpm7scc6w"/><path class="hs8_-3v4o"/></g>`,
		"fallback": "vadivam:playing-card",
	});
}

export default Component;
