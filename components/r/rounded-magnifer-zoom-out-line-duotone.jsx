import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pt9xvrdoi.css';
import '../../css/z/znoc0kvzy.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0ggNochV"><g class="k2u665ban"><circle class="pt9xvrdoi"/><path class="znoc0kvzy"/></g></mask></defs><path mask="url(#SVG0ggNochV)" class="w49j0rbvv"/>`,
		"fallback": "solar:rounded-magnifer-zoom-out-line-duotone",
	});
}

export default Component;
