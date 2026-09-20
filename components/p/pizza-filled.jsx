import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp8jkl.css';
import '../../css/i/i7fxbk.css';
import '../../css/j/j-yyay.css';
import '../../css/g/glymdo.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-52.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzW4qcc1a"><path class="xp8jkl"/><circle class="i7fxbk j-yyay"/><circle class="glymdo i7fxbk"/></mask></defs><path mask="url(#SVGzW4qcc1a)" class="botfzx"/>`,
		"fallback": "line-md:pizza-filled",
	});
}

export default Component;
