import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie42jkbnl.css';
import '../../css/s/s2tb-y15u.css';
import '../../css/m/m_cjgobea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie42jkbnl wm-shadow"/><path class="s2tb-y15u wm-k"/><path class="m_cjgobea wm-k"/>`,
		"fallback": "withicons-pastel:square-dashed",
	});
}

export default Component;
