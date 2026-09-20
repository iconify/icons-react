import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hogezrbqn.css';
import '../../css/r/rr5dcybol.css';
import '../../css/o/o_4drwbrm.css';
import '../../css/j/jq0a07ufs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="hogezrbqn"/><path class="rr5dcybol"/><path class="o_4drwbrm"/><path class="jq0a07ufs"/></g>`,
		"fallback": "streamline-plump-color:log",
	});
}

export default Component;
