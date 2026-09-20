import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2n3zmxig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b2n3zmxig"/>`,
		"fallback": "streamline-plump:triangle-arrow-turn-down-left-large-remix",
	});
}

export default Component;
