import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5u7t3i_i.css';
import '../../css/x/x24uzsf-w.css';
import '../../css/b/bq8-esbzm.css';
import '../../css/o/on0sv8bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5u7t3i_i"/><path class="x24uzsf-w"/><path class="bq8-esbzm"/><path clip-rule="evenodd" class="on0sv8bmj"/>`,
		"fallback": "solar:masks-outline",
	});
}

export default Component;
