import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/offmweb-q.css';
import '../../css/g/gotjsow0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="offmweb-q"/><path class="gotjsow0d"/>`,
		"fallback": "stash:wallet-light",
	});
}

export default Component;
