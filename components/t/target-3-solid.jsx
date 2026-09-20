import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/njxzozy5l.css';
import '../../css/t/thityubsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="njxzozy5l"/><path class="thityubsu"/></g>`,
		"fallback": "streamline-plump:target-3-solid",
	});
}

export default Component;
