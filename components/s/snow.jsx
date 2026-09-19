import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq-5_4bib.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq-5_4bib"/>`,
		"fallback": "icon-park-outline:snow",
	});
}

export default Component;
