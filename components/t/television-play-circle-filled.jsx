import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wiwz2_ber.css';
import '../../css/j/jcid24tzb.css';
import '../../css/z/zsoy0wsts.css';
import '../../css/k/kg9oxl0kw.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="wiwz2_ber"/><path class="jcid24tzb"/><path class="zsoy0wsts"/><path class="kg9oxl0kw"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:television-play-circle-filled",
	});
}

export default Component;
