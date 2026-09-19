import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mqh_-8j2q.css';
import '../../css/y/ybvr_gb5s.css';
import '../../css/k/k2mh5kpet.css';
import '../../css/f/fuc7djkee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="mqh_-8j2q"/><path class="ybvr_gb5s"/><circle class="k2mh5kpet"/><path class="fuc7djkee"/></g>`,
		"fallback": "icon-park-solid:people-search-one",
	});
}

export default Component;
