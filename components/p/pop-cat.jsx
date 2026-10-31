import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/err1n2woy.css';
import '../../css/r/raamonbyi.css';
import '../../css/h/hq2799n0i.css';
import '../../css/g/g5za4bq6i.css';
import '../../css/k/k50z3d52f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="err1n2woy"/><path class="raamonbyi"/><path class="hq2799n0i"/><path class="g5za4bq6i"/><path class="k50z3d52f"/></g>`,
		"fallback": "streamline-memes:pop-cat",
	});
}

export default Component;
