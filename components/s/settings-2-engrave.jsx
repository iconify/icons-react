import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cqhiobchy.css';
import '../../css/r/rzd01oq5r.css';
import '../../css/h/hbz3scbjd.css';
import '../../css/t/tsgnk6b9n.css';
import '../../css/p/p77vdobsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cqhiobchy wm-k"/><path class="rzd01oq5r wm-a"/><path class="hbz3scbjd wm-shadow"/><path class="tsgnk6b9n wm-k"/><path class="p77vdobsr wm-a"/></g>`,
		"fallback": "withicons:settings-2-engrave",
	});
}

export default Component;
