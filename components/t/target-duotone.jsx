import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9m23kb1m.css';
import '../../css/s/sz3jedbeq.css';
import '../../css/x/x_4guwbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9m23kb1m"/><path class="sz3jedbeq"/><path class="x_4guwbps"/>`,
		"fallback": "stash:target-duotone",
	});
}

export default Component;
