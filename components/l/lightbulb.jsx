import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yqx-b7b4t.css';
import '../../css/j/jdg7c2xsl.css';
import '../../css/r/rfd-_abzn.css';
import '../../css/w/wae3_mkwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yqx-b7b4t"/><path class="jdg7c2xsl"/><path class="rfd-_abzn"/><path class="wae3_mkwd"/></g>`,
		"fallback": "matita:lightbulb",
	});
}

export default Component;
