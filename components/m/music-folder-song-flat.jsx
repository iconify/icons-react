import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ridvqub8y.css';
import '../../css/y/yt88z-6hq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ridvqub8y"/><path class="yt88z-6hq"/></g>`,
		"fallback": "streamline-color:music-folder-song-flat",
	});
}

export default Component;
