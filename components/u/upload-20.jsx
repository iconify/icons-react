import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn4hkfpso.css';
import '../../css/u/un40bqbnz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn4hkfpso"/><path class="un40bqbnz"/>`,
		"fallback": "energy-icons:upload-20",
	});
}

export default Component;
