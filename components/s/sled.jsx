import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6h5wnb1n.css';
import '../../css/f/fwg9mrx_e.css';
import '../../css/e/e2pqhtwyu.css';
import '../../css/r/r59myb4uv.css';
import '../../css/o/o8aie2byn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6h5wnb1n"/><path class="fwg9mrx_e"/><path class="e2pqhtwyu"/><path class="r59myb4uv"/><path class="o8aie2byn"/></g>`,
		"fallback": "fluent-emoji-flat:sled",
	});
}

export default Component;
