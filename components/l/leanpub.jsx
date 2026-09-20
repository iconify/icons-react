import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjaa7tbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjaa7tbpq"/>`,
		"fallback": "thesvg:leanpub",
	});
}

export default Component;
