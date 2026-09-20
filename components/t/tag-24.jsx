import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7gi09b7p.css';
import '../../css/z/zpma4hb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7gi09b7p"/><path class="zpma4hb3l"/>`,
		"fallback": "octicon:tag-24",
	});
}

export default Component;
