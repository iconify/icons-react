import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/werlsvbgf.css';
import '../../css/r/rlkfsjbzh.css';
import '../../css/t/tibulpbty.css';
import '../../css/v/vp2v9wbli.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="werlsvbgf"/><path class="rlkfsjbzh"/><path class="tibulpbty"/><path class="vp2v9wbli"/></g>`,
		"fallback": "glyphs:watch-fitness-outline",
	});
}

export default Component;
