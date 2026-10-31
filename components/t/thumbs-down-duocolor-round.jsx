import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gxrw_4yjw.css';
import '../../css/s/sdzlwabve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gxrw_4yjw"/><path class="sdzlwabve"/></g>`,
		"fallback": "coolicons:thumbs-down-duocolor-round",
	});
}

export default Component;
