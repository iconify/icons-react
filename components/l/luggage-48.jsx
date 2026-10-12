import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuj2oe5ct.css';
import '../../css/s/sf2s86-6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuj2oe5ct"/><path class="sf2s86-6l"/>`,
		"fallback": "energy-icons:luggage-48",
	});
}

export default Component;
