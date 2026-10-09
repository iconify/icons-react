import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdkgyrbga.css';
import '../../css/s/sd_vembah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdkgyrbga"/><path class="sd_vembah"/>`,
		"fallback": "energy-icons:user-x-48",
	});
}

export default Component;
