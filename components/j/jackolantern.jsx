import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3pnteb4q.css';
import '../../css/z/z8w7qxj_f.css';
import '../../css/i/ikqyocnfd.css';
import '../../css/r/rcpunmh1x.css';
import '../../css/h/h34w4lb7w.css';
import '../../css/x/xemfdgbmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3pnteb4q"/><path class="z8w7qxj_f"/><path class="ikqyocnfd"/><path class="rcpunmh1x"/><path class="h34w4lb7w"/><path class="xemfdgbmo"/>`,
		"fallback": "fxemoji:jackolantern",
	});
}

export default Component;
