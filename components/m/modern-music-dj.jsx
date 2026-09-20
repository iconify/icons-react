import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/ziygmcxzn.css';
import '../../css/l/l2xaw8bcb.css';
import '../../css/y/yla1pjbjb.css';
import '../../css/r/runq6zfif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ziygmcxzn"/><path class="l2xaw8bcb"/><path class="yla1pjbjb"/><path class="runq6zfif"/></g>`,
		"fallback": "streamline-freehand-color:modern-music-dj",
	});
}

export default Component;
