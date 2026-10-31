import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/psdgkt55f.css';
import '../../css/g/gnxot9b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="psdgkt55f"/><path class="gnxot9b7d"/></g>`,
		"fallback": "coolicons:rabbit-duocolor-round",
	});
}

export default Component;
