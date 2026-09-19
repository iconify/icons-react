import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw59hezlg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw59hezlg"/>`,
		"fallback": "icon-park-outline:six",
	});
}

export default Component;
