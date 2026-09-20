import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_omvb_gj.css';
import '../../css/x/xgsv66jjz.css';
import '../../css/k/kg-qgmbsg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle clip-rule="evenodd" transform="rotate(-13.286 255.94 255.868)" class="k_omvb_gj"/><path clip-rule="evenodd" class="xgsv66jjz"/><path clip-rule="evenodd" class="kg-qgmbsg"/>`,
		"fallback": "selfhst:nextcloud-dark",
	});
}

export default Component;
