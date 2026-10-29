import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjq-6db1p.css';
import '../../css/s/st7bm40ae.css';
import '../../css/m/mz609cc_k.css';
import '../../css/e/ea6yb7buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjq-6db1p wm-a"/><path class="st7bm40ae wm-k"/><path class="mz609cc_k wm-k"/><path class="ea6yb7buv wm-k"/>`,
		"fallback": "withicons-bauhaus:tv",
	});
}

export default Component;
