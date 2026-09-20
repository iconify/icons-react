import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1izyrteh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1izyrteh"/>`,
		"fallback": "streamline-plump:table-remix",
	});
}

export default Component;
