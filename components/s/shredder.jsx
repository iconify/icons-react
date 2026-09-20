import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/j1gjwekep.css';
import '../../css/o/ons_n2z9r.css';
import '../../css/j/jrz-9jb8w.css';
import '../../css/o/ofpbibfie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="j1gjwekep"/><path class="ons_n2z9r"/><path class="jrz-9jb8w"/><path class="ofpbibfie"/></g>`,
		"fallback": "streamline-sharp-color:shredder",
	});
}

export default Component;
