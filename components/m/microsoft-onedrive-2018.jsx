import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3a_m_e4a.css';
import '../../css/v/vcbqy5bsy.css';
import '../../css/k/kaoxaxu7c.css';
import '../../css/x/xd6m6dxve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3a_m_e4a"/><path class="vcbqy5bsy"/><path class="kaoxaxu7c"/><path class="xd6m6dxve"/>`,
		"fallback": "selfhst:microsoft-onedrive-2018",
	});
}

export default Component;
