import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qq-kjr96t.css';
import '../../css/j/jrlpapbzu.css';
import '../../css/n/nl7l0ib6w.css';
import '../../css/l/lpd03ybdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="qq-kjr96t"/><path class="jrlpapbzu"/><path class="nl7l0ib6w"/><path class="lpd03ybdm"/></g>`,
		"fallback": "streamline-plump-color:mouse-wireless-1",
	});
}

export default Component;
