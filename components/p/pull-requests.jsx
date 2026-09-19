import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/tc7vr3bpx.css';
import '../../css/g/gwra3bc3h.css';
import '../../css/a/ax20kobkb.css';
import '../../css/x/xpk902bao.css';
import '../../css/s/sx93hzcdo.css';
import '../../css/d/daq_83f8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="tc7vr3bpx"/><path class="gwra3bc3h"/><path class="ax20kobkb"/><path class="xpk902bao"/><path class="sx93hzcdo"/><path class="daq_83f8q"/></g>`,
		"fallback": "icon-park:pull-requests",
	});
}

export default Component;
