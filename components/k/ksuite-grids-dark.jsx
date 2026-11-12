import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrb10v-km.css';
import '../../css/y/yhs-rpbzu.css';
import '../../css/t/t_aewkbjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrb10v-km"/><path class="yhs-rpbzu"/><path class="t_aewkbjn"/>`,
		"fallback": "selfhst:ksuite-grids-dark",
	});
}

export default Component;
