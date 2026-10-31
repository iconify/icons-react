import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lo0jysz2y.css';
import '../../css/b/bz7kdbcmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lo0jysz2y"/><path class="bz7kdbcmf"/></g>`,
		"fallback": "coolicons:road-duocolor-round",
	});
}

export default Component;
