import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7dawc.css';
import '../../css/t/t5pxry.css';
import '../../css/o/ovwh-q.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGepJYqeIi"><path class="p7dawc t5pxry"/><path class="ovwh-q t5pxry"/></mask></defs><path mask="url(#SVGepJYqeIi)" class="botfzx"/>`,
		"fallback": "line-md:square-filled-to-confirm-square-filled-transition",
	});
}

export default Component;
