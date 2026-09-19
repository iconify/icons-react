import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvzf_gblt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvzf_gblt"/>`,
		"fallback": "icon-park-outline:magnet",
	});
}

export default Component;
