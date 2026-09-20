import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sva600csq.css';
import '../../css/m/mtppl3b9k.css';
import '../../css/d/d_6bhqmtv.css';
import '../../css/r/r3hdhxbhs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="sva600csq"/><path class="mtppl3b9k"/><path class="d_6bhqmtv"/><path class="r3hdhxbhs"/></g>`,
		"fallback": "streamline-plump-color:street-sign",
	});
}

export default Component;
