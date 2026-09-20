import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phlzhsbtw.css';
import '../../css/r/r-murxbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="phlzhsbtw"/><path class="r-murxbzu"/></g>`,
		"fallback": "tabler:sock",
	});
}

export default Component;
