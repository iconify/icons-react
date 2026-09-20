import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wiwz2_ber.css';
import '../../css/j/jcid24tzb.css';
import '../../css/z/zsoy0wsts.css';
import '../../css/k/kg9oxl0kw.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wiwz2_ber"/><path class="jcid24tzb"/><path class="zsoy0wsts"/><path class="kg9oxl0kw"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:television-play-circle",
	});
}

export default Component;
