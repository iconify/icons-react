import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vs4qv9b5t.css';
import '../../css/a/akttj88fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vs4qv9b5t"/><path class="akttj88fr"/></g>`,
		"fallback": "tabler:tags-chevron-right",
	});
}

export default Component;
