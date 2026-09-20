import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xbez9ac1c.css';
import '../../css/o/oq5mq6eal.css';
import '../../css/c/cr58xw76v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xbez9ac1c"/><path class="oq5mq6eal"/><path class="cr58xw76v"/></g>`,
		"fallback": "streamline-plump-color:test-tube",
	});
}

export default Component;
