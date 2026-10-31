import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymvjmwp_c.css';
import '../../css/l/lj8m_5b8h.css';
import '../../css/d/dealb4p_u.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymvjmwp_c"/><path class="lj8m_5b8h"/><path class="dealb4p_u"/>`,
		"fallback": "tabler-flags:tokelau",
	});
}

export default Component;
