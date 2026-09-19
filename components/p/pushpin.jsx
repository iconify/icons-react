import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gae0srbhg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gae0srbhg"/>`,
		"fallback": "icon-park:pushpin",
	});
}

export default Component;
