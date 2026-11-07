import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvcm_2wyi.css';
import '../../css/o/oqai2m_dh.css';
import '../../css/u/u7dt5acml.css';
import '../../css/v/v2xxlybwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvcm_2wyi"/><path class="oqai2m_dh"/><path class="u7dt5acml"/><path class="v2xxlybwy"/>`,
		"fallback": "solar:password-bold-duotone",
	});
}

export default Component;
