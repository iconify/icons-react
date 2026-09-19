import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/h/hlb29195s.css';
import '../../css/t/tpmncccuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="xr1zzs9rr"/><path class="hlb29195s"/><path class="tpmncccuy"/></g>`,
		"fallback": "iconamoon:slightly-smiling-face-thin",
	});
}

export default Component;
