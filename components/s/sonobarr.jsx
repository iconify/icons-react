import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndbkslbvb.css';
import '../../css/c/cdd4wcvmi.css';
import '../../css/e/eodm2abwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndbkslbvb"/><path class="cdd4wcvmi"/><path class="eodm2abwd"/>`,
		"fallback": "selfhst:sonobarr",
	});
}

export default Component;
