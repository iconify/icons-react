import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7o7o5b7l.css';
import '../../css/t/t6gh8ibmm.css';
import '../../css/s/sehm2dsik.css';
import '../../css/q/qu6l8ybxw.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7o7o5b7l"/><path clip-rule="evenodd" class="t6gh8ibmm"/><path class="sehm2dsik"/><path clip-rule="evenodd" class="qu6l8ybxw"/>`,
		"fallback": "lineicons:seo-monitor",
	});
}

export default Component;
