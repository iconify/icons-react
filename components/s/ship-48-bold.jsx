import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbfaewbaw.css';
import '../../css/s/scknzcbae.css';
import '../../css/d/d672b0b5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbfaewbaw"/><path class="scknzcbae"/><path class="d672b0b5z"/>`,
		"fallback": "energy-icons:ship-48-bold",
	});
}

export default Component;
