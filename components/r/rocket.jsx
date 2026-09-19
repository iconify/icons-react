import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixkuiac2o.css';
import '../../css/l/lez6mrb8y.css';
import '../../css/n/nmtfkrd1j.css';
import '../../css/q/qqx1kbb4p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ixkuiac2o"/><path clip-rule="evenodd" class="lez6mrb8y"/><path clip-rule="evenodd" class="nmtfkrd1j"/><path class="qqx1kbb4p"/></g>`,
		"fallback": "codicon:rocket",
	});
}

export default Component;
