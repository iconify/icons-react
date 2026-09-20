import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pcw721sro.css';
import '../../css/n/n5-9d8b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pcw721sro"/><path class="n5-9d8b8r"/></g>`,
		"fallback": "tabler:server-spark",
	});
}

export default Component;
