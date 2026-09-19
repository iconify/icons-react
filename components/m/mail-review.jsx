import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/t-lmtqbvy.css';
import '../../css/c/czwtscbxu.css';
import '../../css/f/fz7nbcc5u.css';
import '../../css/x/x2v1nbbxv.css';
import '../../css/m/m4vdscbwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="t-lmtqbvy"/><path class="czwtscbxu"/><path class="fz7nbcc5u"/><path class="x2v1nbbxv"/><path class="m4vdscbwk"/></g>`,
		"fallback": "icon-park:mail-review",
	});
}

export default Component;
