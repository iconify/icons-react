import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s9qulkbkk.css';
import '../../css/f/f7zmmlbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="s9qulkbkk"/><path class="f7zmmlbvu"/></g>`,
		"fallback": "lucide:subtitles",
	});
}

export default Component;
