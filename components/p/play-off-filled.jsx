import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnah6j.css';
import '../../css/t/t5pxry.css';
import '../../css/e/ezrzlo.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-38.css';
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
		"content": `<defs><mask id="SVGHr6WMbnD"><path class="gnah6j t5pxry"/><path class="ezrzlo oxx-om t5pxry"/></mask></defs><path mask="url(#SVGHr6WMbnD)" class="botfzx"/><path class="ezrzlo gd_4-q t5pxry"/>`,
		"fallback": "line-md:play-off-filled",
	});
}

export default Component;
