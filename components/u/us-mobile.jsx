import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7cy_2mli.css';
import '../../css/j/j30vuwbhr.css';
import '../../css/p/p1h-zgy2y.css';
import '../../css/v/vu-ogmxzq.css';
import '../../css/s/sl0bimztx.css';
import '../../css/k/kc_qveb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7cy_2mli"/><path class="j30vuwbhr"/><path class="p1h-zgy2y"/><path class="vu-ogmxzq"/><path class="sl0bimztx"/><path class="kc_qveb6d"/>`,
		"fallback": "selfhst:us-mobile",
	});
}

export default Component;
