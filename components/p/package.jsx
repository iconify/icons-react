import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c-n0k9bwf.css';
import '../../css/n/n4nzln9ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c-n0k9bwf"/><path class="n4nzln9ol"/></g>`,
		"fallback": "lucide:package",
	});
}

export default Component;
