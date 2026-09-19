import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rxf__865o.css';
import '../../css/l/l4kenyv0j.css';
import '../../css/q/qjo2kn20h.css';
import '../../css/k/k9l79-hyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="rxf__865o"/><rect class="l4kenyv0j"/><rect class="qjo2kn20h"/><path class="k9l79-hyf"/></g>`,
		"fallback": "bitcoin-icons:tree-structure-outline",
	});
}

export default Component;
