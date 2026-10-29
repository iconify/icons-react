import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ap5h-cbhb.css';
import '../../css/l/llefpiban.css';
import '../../css/f/fvgc87o3c.css';
import '../../css/w/wbk6h5rku.css';
import '../../css/b/b86buo32x.css';
import '../../css/k/ki55z6ilg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ap5h-cbhb wm-k"/><path class="llefpiban wm-a"/><path class="fvgc87o3c wm-shadow"/><path class="wbk6h5rku wm-a"/><path class="b86buo32x wm-k"/><path class="ki55z6ilg wm-a"/></g>`,
		"fallback": "withicons:unlock-engrave",
	});
}

export default Component;
