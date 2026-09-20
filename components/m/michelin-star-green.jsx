import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t4mfj4b3n.css';
import '../../css/b/bl3u4rb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t4mfj4b3n"/><path class="bl3u4rb9x"/></g>`,
		"fallback": "tabler:michelin-star-green",
	});
}

export default Component;
