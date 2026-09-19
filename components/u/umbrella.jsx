import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0gzk6brg.css';
import '../../css/e/ej7w26egc.css';
import '../../css/z/zjkpm8zfi.css';
import '../../css/d/d_yj8qt1e.css';
import '../../css/n/nzmsevbde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0gzk6brg"/><path class="ej7w26egc"/><path class="zjkpm8zfi"/><path class="d_yj8qt1e"/><path class="nzmsevbde"/>`,
		"fallback": "fxemoji:umbrella",
	});
}

export default Component;
