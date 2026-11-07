import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sklhavqwo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xwm12xb4n.css';
import '../../css/d/ddac4o51k.css';
import '../../css/y/yz1lcmbqq.css';
import '../../css/g/gmpr8wbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sklhavqwo"/><g class="xtpeb-edw"><path class="xwm12xb4n"/><path class="ddac4o51k"/><path class="yz1lcmbqq"/><path class="gmpr8wbig"/></g>`,
		"fallback": "solar:pin-list-bold-duotone",
	});
}

export default Component;
