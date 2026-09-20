import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9f-6bqnk.css';
import '../../css/s/s9bo3f1fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u9f-6bqnk"/><path class="s9bo3f1fw"/></g>`,
		"fallback": "lucide:lamp-ceiling",
	});
}

export default Component;
