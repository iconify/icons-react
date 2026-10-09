import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy-u42bhp.css';
import '../../css/j/jcjy32bzm.css';
import '../../css/a/al63s1bwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy-u42bhp"/><path class="jcjy32bzm"/><path class="al63s1bwo"/>`,
		"fallback": "energy-icons:message-plus-48-bold",
	});
}

export default Component;
