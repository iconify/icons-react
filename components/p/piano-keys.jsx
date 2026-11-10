import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jli7lacif.css';
import '../../css/n/nbf9p2bla.css';
import '../../css/k/kwu0p7b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jli7lacif"/><path class="nbf9p2bla"/><path class="kwu0p7b0t"/></g>`,
		"fallback": "andrsrxn:piano-keys",
	});
}

export default Component;
