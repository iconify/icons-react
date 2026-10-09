import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5i-ymejz.css';
import '../../css/x/xv-3bjb_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5i-ymejz"/><path class="xv-3bjb_h"/>`,
		"fallback": "energy-icons:rotor-48",
	});
}

export default Component;
