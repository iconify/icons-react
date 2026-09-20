import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azgzbnbor.css';
import '../../css/u/ut-r7absq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="azgzbnbor"/><path class="ut-r7absq"/></g>`,
		"fallback": "lucide-lab:mug-teabag",
	});
}

export default Component;
