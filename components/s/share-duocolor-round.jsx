import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwo5v8b9w.css';
import '../../css/l/lgzg4ib-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dwo5v8b9w"/><path class="lgzg4ib-i"/></g>`,
		"fallback": "coolicons:share-duocolor-round",
	});
}

export default Component;
