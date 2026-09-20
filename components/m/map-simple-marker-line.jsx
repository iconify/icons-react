import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aq9fmu2-k.css';
import '../../css/x/xqay114ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aq9fmu2-k"/><path class="xqay114ur"/></g>`,
		"fallback": "majesticons:map-simple-marker-line",
	});
}

export default Component;
