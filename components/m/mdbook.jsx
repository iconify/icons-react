import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9c9wr01r.css';
import '../../css/r/rdsfeeb9x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9c9wr01r"/><path class="rdsfeeb9x"/>`,
		"fallback": "catppuccin:mdbook",
	});
}

export default Component;
