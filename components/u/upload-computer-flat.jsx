import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nj8-f164m.css';
import '../../css/o/otzeqlbfy.css';
import '../../css/z/z90o2kbpb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nj8-f164m"/><path clip-rule="evenodd" class="otzeqlbfy"/><path class="z90o2kbpb"/></g>`,
		"fallback": "streamline-color:upload-computer-flat",
	});
}

export default Component;
