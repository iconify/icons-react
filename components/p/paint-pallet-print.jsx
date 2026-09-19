import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/v/vyvshsbip.css';
import '../../css/r/rlwl2acug.css';
import '../../css/e/ev489acbr.css';
import '../../css/t/tvgvktojj.css';
import '../../css/a/awu9uodoz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="vyvshsbip"/><path clip-rule="evenodd" class="rlwl2acug"/></g><path clip-rule="evenodd" class="ev489acbr"/><path class="tvgvktojj"/><path clip-rule="evenodd" class="awu9uodoz"/></g>`,
		"fallback": "pepicons:paint-pallet-print",
	});
}

export default Component;
