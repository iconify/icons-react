import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skzwabbyw.css';
import '../../css/n/nxncqupjp.css';
import '../../css/x/xxk96h82w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="skzwabbyw"/><path class="nxncqupjp"/><path class="xxk96h82w"/></g>`,
		"fallback": "tabler:rainbow",
	});
}

export default Component;
