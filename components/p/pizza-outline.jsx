import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycsa12osl.css';
import '../../css/n/n3hic-b0a.css';
import '../../css/u/u7oebpbpx.css';
import '../../css/s/sxc6tccln.css';
import '../../css/e/egjqshbmq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycsa12osl"/><path class="n3hic-b0a"/><circle class="u7oebpbpx"/><circle class="sxc6tccln"/><circle class="egjqshbmq"/>`,
		"fallback": "ion:pizza-outline",
	});
}

export default Component;
