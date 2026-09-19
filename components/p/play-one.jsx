import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df254mb3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df254mb3b"/>`,
		"fallback": "icon-park-solid:play-one",
	});
}

export default Component;
