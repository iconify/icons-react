import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h3rplhb3u.css';
import '../../css/y/yq1lnbbvu.css';
import '../../css/z/zj-4fifqf.css';
import '../../css/e/ewveombiy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h3rplhb3u"/><path class="yq1lnbbvu"/><path class="zj-4fifqf"/><path class="ewveombiy"/></g>`,
		"fallback": "glyphs-poly:puzzle",
	});
}

export default Component;
