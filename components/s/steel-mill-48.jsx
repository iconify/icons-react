import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_l85o6fg.css';
import '../../css/d/drwzrccpo.css';
import '../../css/c/cgyi4tt_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_l85o6fg"/><path class="drwzrccpo"/><path class="cgyi4tt_h"/>`,
		"fallback": "energy-icons:steel-mill-48",
	});
}

export default Component;
