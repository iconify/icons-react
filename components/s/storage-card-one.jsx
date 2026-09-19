import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tynd-xbvw.css';
import '../../css/j/jjitwcc7v.css';
import '../../css/b/bm2e03zbo.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGshCrdeNt"><g class="v3_i3wktz"><path class="tynd-xbvw"/><path class="jjitwcc7v"/><path class="bm2e03zbo"/></g></mask></defs><path mask="url(#SVGshCrdeNt)" class="maw6_-12u"/>`,
		"fallback": "icon-park-twotone:storage-card-one",
	});
}

export default Component;
