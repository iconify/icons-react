import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t19w5m.css';
import '../../css/t/t5pxry.css';
import '../../css/w/wbymzg.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-82.css';
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
		"content": `<defs><mask id="SVGcSVXwbeB"><path class="t19w5m t5pxry"/><path class="t5pxry wbymzg"/></mask></defs><path mask="url(#SVGcSVXwbeB)" class="botfzx"/>`,
		"fallback": "line-md:mastodon-filled",
	});
}

export default Component;
