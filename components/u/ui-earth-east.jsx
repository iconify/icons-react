import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9sb1r7in.css';
import '../../css/z/zmirjg79h.css';
import '../../css/b/b6spzmbdx.css';
import '../../css/m/mai5xwbnq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9sb1r7in"/><path class="zmirjg79h"/><path class="b6spzmbdx"/><path class="mai5xwbnq"/>`,
		"fallback": "geo:ui-earth-east",
	});
}

export default Component;
