import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n9peftvhw.css';
import '../../css/n/nieto3bph.css';
import '../../css/n/nbecvubak.css';
import '../../css/a/azo_exbdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="n9peftvhw"/><path class="nieto3bph"/><path class="nbecvubak"/><path class="azo_exbdi"/></g>`,
		"fallback": "streamline-plump-color:recycle-bin-2",
	});
}

export default Component;
