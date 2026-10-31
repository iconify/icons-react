import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gncq5yvtt.css';
import '../../css/j/j-wxgjbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gncq5yvtt"/><path class="j-wxgjbtz"/></g>`,
		"fallback": "coolicons:sunset-duocolor-round",
	});
}

export default Component;
