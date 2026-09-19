import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnwisc42e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pnwisc42e"/>`,
		"fallback": "healthicons:viral-lung-infection",
	});
}

export default Component;
