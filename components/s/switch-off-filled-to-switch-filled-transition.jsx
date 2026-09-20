import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snl_hb.css';
import '../../css/x/x93a4q.css';
import '../../css/b/botfzx.css';
import '../../css/c/cx-from-7px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG262Nbd6S"><path class="snl_hb"/><circle class="x93a4q"/></mask></defs><path mask="url(#SVG262Nbd6S)" class="botfzx"/>`,
		"fallback": "line-md:switch-off-filled-to-switch-filled-transition",
	});
}

export default Component;
