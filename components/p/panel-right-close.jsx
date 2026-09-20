import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4fo2ikrv.css';
import '../../css/x/xaz7lpbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u4fo2ikrv"/><path class="xaz7lpbaz"/></g>`,
		"fallback": "vadivam:panel-right-close",
	});
}

export default Component;
