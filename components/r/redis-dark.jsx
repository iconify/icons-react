import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ypn-bbu.css';
import '../../css/a/a4a1azmng.css';
import '../../css/c/cbtgv-02r.css';
import '../../css/p/puamdebye.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8ypn-bbu"/><path class="a4a1azmng"/><path class="cbtgv-02r"/><path class="puamdebye"/>`,
		"fallback": "selfhst:redis-dark",
	});
}

export default Component;
