import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtk7136by.css';
import '../../css/i/i3cagyb-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtk7136by"/><path class="i3cagyb-j"/>`,
		"fallback": "energy-icons:send-48",
	});
}

export default Component;
