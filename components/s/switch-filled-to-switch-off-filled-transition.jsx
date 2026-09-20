import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snl_hb.css';
import '../../css/e/e3x2ay.css';
import '../../css/b/botfzx.css';
import '../../css/c/cx-from-17px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjcmRbbQu"><path class="snl_hb"/><circle class="e3x2ay"/></mask></defs><path mask="url(#SVGjcmRbbQu)" class="botfzx"/>`,
		"fallback": "line-md:switch-filled-to-switch-off-filled-transition",
	});
}

export default Component;
