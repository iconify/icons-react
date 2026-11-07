import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/e/eaqdpdd8a.css';
import '../../css/n/nr40y6jfb.css';
import '../../css/i/ia8kjfbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="eaqdpdd8a"/><path class="nr40y6jfb"/><path class="ia8kjfbpi"/>`,
		"fallback": "solar:sort-bold-duotone",
	});
}

export default Component;
