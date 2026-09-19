import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ih_h_dn1q.css';
import '../../css/n/n9-40i5zf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ih_h_dn1q"/><path class="n9-40i5zf"/></g>`,
		"fallback": "bytesize:location",
	});
}

export default Component;
