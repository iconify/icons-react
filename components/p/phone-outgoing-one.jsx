import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zvnz4y-5v.css';
import '../../css/u/uj6jun1kw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zvnz4y-5v"/><path class="uj6jun1kw"/></g>`,
		"fallback": "icon-park-solid:phone-outgoing-one",
	});
}

export default Component;
