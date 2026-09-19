import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kml1eewvt.css';
import '../../css/g/gbvfgr_zm.css';
import '../../css/p/pjwppjbhu.css';
import '../../css/s/sjq61vbaj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kml1eewvt"/><path class="gbvfgr_zm"/><path class="pjwppjbhu"/><path class="sjq61vbaj"/></g>`,
		"fallback": "glyphs:ruler-trinangle-outline",
	});
}

export default Component;
