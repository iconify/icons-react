import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx6um9bzn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wx6um9bzn"/>`,
		"fallback": "streamline-plump:stock-remix",
	});
}

export default Component;
