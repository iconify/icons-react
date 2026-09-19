import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b-div1bns.css';
import '../../css/i/i75ax53xw.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyiuSLeoF"><g class="aql7dnt-u"><path class="b-div1bns"/><path class="i75ax53xw"/></g></mask></defs><path mask="url(#SVGyiuSLeoF)" class="maw6_-12u"/>`,
		"fallback": "icon-park-twotone:kettle",
	});
}

export default Component;
