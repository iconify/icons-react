import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur9gjri0x.css';
import '../../css/w/wom-shbgk.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur9gjri0x"/><path class="wom-shbgk"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:mail-x-48-bold",
	});
}

export default Component;
