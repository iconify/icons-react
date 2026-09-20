import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/k/ks0qo9bbe.css';
import '../../css/v/vorlg-byp.css';
import '../../css/y/yeb121b_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="ks0qo9bbe"/><path class="vorlg-byp"/><path class="yeb121b_t"/></g>`,
		"fallback": "streamline-plump:lipstick",
	});
}

export default Component;
