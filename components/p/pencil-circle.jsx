import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/og2zrldks.css';
import '../../css/b/byqu_j-nh.css';
import '../../css/z/zcurbcz2r.css';
import '../../css/v/vdzwjcbcs.css';
import '../../css/s/skooppb3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="og2zrldks"/><path class="byqu_j-nh"/><path class="zcurbcz2r"/><path class="vdzwjcbcs"/><path class="skooppb3c"/></g>`,
		"fallback": "streamline-plump-color:pencil-circle",
	});
}

export default Component;
