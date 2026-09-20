import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg00kur-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pg00kur-y"/>`,
		"fallback": "streamline-plump:signal-full-remix",
	});
}

export default Component;
