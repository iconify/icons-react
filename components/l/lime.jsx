import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/a/aqy_ylbdw.css';
import '../../css/r/r--go88jm.css';
import '../../css/j/jxsqz9b-j.css';
import '../../css/r/r85psb14m.css';
import '../../css/t/t2fa2el1e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="aqy_ylbdw"/><path class="r--go88jm"/><path class="jxsqz9b-j"/><path class="r85psb14m"/></g><path class="t2fa2el1e"/>`,
		"fallback": "openmoji:lime",
	});
}

export default Component;
