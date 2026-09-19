import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f02hbyofe.css';
import '../../css/b/bm8h3db9m.css';
import '../../css/d/ddmfo5g7c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f02hbyofe"/><path class="bm8h3db9m"/><path class="ddmfo5g7c"/>`,
		"fallback": "catppuccin:luau-test",
	});
}

export default Component;
