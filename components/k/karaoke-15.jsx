import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xowwcxs5r.css';
import '../../css/i/is011gbzc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xowwcxs5r"/><path class="is011gbzc"/>`,
		"fallback": "maki:karaoke-15",
	});
}

export default Component;
