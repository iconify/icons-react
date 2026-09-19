import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kb4m0fbdw.css';
import '../../css/p/pc2ar_o3p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="kb4m0fbdw"/><path class="pc2ar_o3p"/></g>`,
		"fallback": "bytesize:search",
	});
}

export default Component;
