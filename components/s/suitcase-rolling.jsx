import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d3qeb45wv.css';
import '../../css/u/uve11ob9q.css';
import '../../css/r/r79o3n11u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d3qeb45wv"/><path class="uve11ob9q"/><path class="r79o3n11u"/></g>`,
		"fallback": "streamline-plump-color:suitcase-rolling",
	});
}

export default Component;
