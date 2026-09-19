import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/yaxw8-bqi.css';
import '../../css/w/wkthxgbnx.css';
import '../../css/k/kbz-upn-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="yaxw8-bqi"/><path class="wkthxgbnx"/><path class="kbz-upn-i"/></g>`,
		"fallback": "icon-park:umbrella-two",
	});
}

export default Component;
