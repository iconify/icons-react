import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le7jai.css';
import '../../css/j/judi8a.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBTh34dFN"><path class="le7jai"/><path class="judi8a"/></mask></defs><path mask="url(#SVGBTh34dFN)" class="botfzx"/>`,
		"fallback": "line-md:pixelfed-filled",
	});
}

export default Component;
