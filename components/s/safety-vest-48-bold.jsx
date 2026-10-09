import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn1iq8b7l.css';
import '../../css/s/scwadacah.css';
import '../../css/g/gdsoirb5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn1iq8b7l"/><path class="scwadacah"/><path class="gdsoirb5d"/>`,
		"fallback": "energy-icons:safety-vest-48-bold",
	});
}

export default Component;
