import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di3yhtbnj.css';
import '../../css/a/a2jx_gbww.css';
import '../../css/j/jcrs4fjps.css';
import '../../css/c/c0e6x-19t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="di3yhtbnj"><path clip-rule="evenodd" class="a2jx_gbww"/><path class="jcrs4fjps"/></g><path clip-rule="evenodd" class="c0e6x-19t"/>`,
		"fallback": "qlementine-icons:layer-3-16",
	});
}

export default Component;
