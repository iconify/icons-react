import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu8fke3yx.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu8fke3yx"/><path class="f5bqv3-2b"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:message-x-48",
	});
}

export default Component;
