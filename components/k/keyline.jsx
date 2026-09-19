import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i5hd2ab8w.css';
import '../../css/u/ujbxjmbjk.css';
import '../../css/a/a3tlaubzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="i5hd2ab8w"/><path class="ujbxjmbjk"/><path class="a3tlaubzd"/></g>`,
		"fallback": "icon-park-solid:keyline",
	});
}

export default Component;
