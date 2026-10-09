import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd-rzr2nq.css';
import '../../css/w/wc-l3tw1u.css';
import '../../css/i/ifvme1b3v.css';
import '../../css/y/yq27hl_bf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd-rzr2nq"/><path class="wc-l3tw1u"/><path class="ifvme1b3v"/><path class="yq27hl_bf"/>`,
		"fallback": "energy-icons:tidal-turbine-48",
	});
}

export default Component;
