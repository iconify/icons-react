import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zrej-zbir.css';
import '../../css/b/b5w76yswc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zrej-zbir"/><path class="b5w76yswc"/></g>`,
		"fallback": "covid:personal-hygiene-hand-wipe-paper-2",
	});
}

export default Component;
