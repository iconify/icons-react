import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__319muk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a__319muk"/>`,
		"fallback": "icon-park-outline:transfer-data",
	});
}

export default Component;
