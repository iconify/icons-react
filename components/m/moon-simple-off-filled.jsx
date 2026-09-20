import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/w/w12haa.css';
import '../../css/o/oxx-om.css';
import '../../css/x/x1bqbh.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlMnmjcIA"><path class="t5pxry w12haa"/><path class="oxx-om t5pxry x1bqbh"/></mask></defs><path mask="url(#SVGlMnmjcIA)" class="botfzx"/><path class="gd_4-q t5pxry x1bqbh"/>`,
		"fallback": "line-md:moon-simple-off-filled",
	});
}

export default Component;
