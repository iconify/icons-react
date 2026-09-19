import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4vbohhei.css';
import '../../css/t/t-tdlib6h.css';
import '../../css/c/cff5u7gra.css';
import '../../css/u/unweze0-f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4vbohhei"/><path class="t-tdlib6h"/><path class="cff5u7gra"/><path class="unweze0-f"/></g>`,
		"fallback": "fluent-emoji-flat:safety-pin",
	});
}

export default Component;
