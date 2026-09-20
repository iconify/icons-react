import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zmuljubko.css';
import '../../css/n/n9jxgrupx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zmuljubko"/><path class="n9jxgrupx"/></g>`,
		"fallback": "lucide:sticky-note-minus",
	});
}

export default Component;
