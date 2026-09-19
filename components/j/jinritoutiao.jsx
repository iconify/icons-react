import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3sx0h80t.css';
import '../../css/j/jz3-sacqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3sx0h80t"/><path clip-rule="evenodd" class="jz3-sacqt"/>`,
		"fallback": "icon-park:jinritoutiao",
	});
}

export default Component;
