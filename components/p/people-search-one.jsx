import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/gy89sobrg.css';
import '../../css/y/ybvr_gb5s.css';
import '../../css/h/hm_tt5a8i.css';
import '../../css/f/fuc7djkee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="gy89sobrg"/><path class="ybvr_gb5s"/><circle class="hm_tt5a8i"/><path class="fuc7djkee"/></g>`,
		"fallback": "icon-park-outline:people-search-one",
	});
}

export default Component;
