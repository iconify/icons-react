import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyx2zp.css';
import '../../css/t/t5pxry.css';
import '../../css/i/i4emph.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
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
		"content": `<defs><mask id="SVGwJ9Rwipn"><path class="pyx2zp t5pxry"/><path class="i4emph t5pxry"/></mask></defs><path mask="url(#SVGwJ9Rwipn)" class="botfzx"/>`,
		"fallback": "line-md:minus-circle-filled",
	});
}

export default Component;
