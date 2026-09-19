import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e__15wuqa.css';
import '../../css/o/o0fi95bse.css';
import '../../css/w/wjiueob9l.css';
import '../../css/z/z2dm66b-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="e__15wuqa"/><path class="o0fi95bse"/><path class="wjiueob9l"/><path class="z2dm66b-w"/></g>`,
		"fallback": "icon-park:sport",
	});
}

export default Component;
