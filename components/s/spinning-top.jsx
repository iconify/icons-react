import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/y/yvrb520ji.css';
import '../../css/m/miwweccgx.css';
import '../../css/z/zxp7120aw.css';
import '../../css/i/i6rq8mbmn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="yvrb520ji"/><path class="miwweccgx"/><path class="zxp7120aw"/><path class="i6rq8mbmn"/></g>`,
		"fallback": "icon-park:spinning-top",
	});
}

export default Component;
