import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ague2ubah.css';
import '../../css/p/p3pbj6l7l.css';
import '../../css/d/d0c6zccib.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ague2ubah"/><path class="p3pbj6l7l"/><path class="d0c6zccib"/>`,
		"fallback": "energy-icons:power-restore-48",
	});
}

export default Component;
