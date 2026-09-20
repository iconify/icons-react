import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eho014b1l.css';
import '../../css/u/uu19liolj.css';
import '../../css/s/sz-d60bes.css';
import '../../css/k/koy5_9nzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="eho014b1l"/><path class="uu19liolj"/><path class="sz-d60bes"/><path class="koy5_9nzr"/></g>`,
		"fallback": "streamline-plump-color:strawberry",
	});
}

export default Component;
