import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stirrtb5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stirrtb5x"/>`,
		"fallback": "icon-park-outline:pot",
	});
}

export default Component;
