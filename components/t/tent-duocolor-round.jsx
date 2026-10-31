import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sp4f4x76l.css';
import '../../css/m/m2qdb_b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sp4f4x76l"/><path class="m2qdb_b7x"/></g>`,
		"fallback": "coolicons:tent-duocolor-round",
	});
}

export default Component;
