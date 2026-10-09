import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2nwdhbfp.css';
import '../../css/o/oke3tmsms.css';
import '../../css/k/kgfy1yblx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2nwdhbfp"/><path class="oke3tmsms"/><path class="kgfy1yblx"/>`,
		"fallback": "energy-icons:solar-street-light-48-bold",
	});
}

export default Component;
