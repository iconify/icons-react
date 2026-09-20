import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq6ct2bms.css';
import '../../css/j/jya8nehdm.css';
import '../../css/d/dtug5xo5w.css';
import '../../css/v/vkhq0_bzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq6ct2bms"/><path class="jya8nehdm"/><path class="dtug5xo5w"/><path class="vkhq0_bzh"/>`,
		"fallback": "selfhst:ksuite-kmeet",
	});
}

export default Component;
