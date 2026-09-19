import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m67mllbtg.css';
import '../../css/b/bzg8--bit.css';
import '../../css/b/bemva3jvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="m67mllbtg"/><path clip-rule="evenodd" class="bzg8--bit"/><path class="bemva3jvi"/></g>`,
		"fallback": "icon-park-solid:printer",
	});
}

export default Component;
