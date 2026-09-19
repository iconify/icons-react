import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3t4a4blh.css';
import '../../css/c/casyzt9mq.css';
import '../../css/a/atjk8mbde.css';
import '../../css/a/az2by_uqa.css';
import '../../css/l/lrejz_2gf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGLLP5OdyS" width="13" height="13" x="30" y="18" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="n3t4a4blh"/></mask><g class="casyzt9mq"><g mask="url(#SVGLLP5OdyS)" class="atjk8mbde"><path class="az2by_uqa"/></g><path class="lrejz_2gf"/></g>`,
		"fallback": "icon-park-outline:volume-mute",
	});
}

export default Component;
