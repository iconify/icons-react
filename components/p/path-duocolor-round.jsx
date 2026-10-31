import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gl16ndboh.css';
import '../../css/i/iiel43b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gl16ndboh"/><path class="iiel43b5s"/></g>`,
		"fallback": "coolicons:path-duocolor-round",
	});
}

export default Component;
