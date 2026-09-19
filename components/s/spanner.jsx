import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh3iejbgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh3iejbgt"/>`,
		"fallback": "icon-park-solid:spanner",
	});
}

export default Component;
