import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-p09f.css';
import '../../css/t/t5pxry.css';
import '../../css/i/i4emph.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-66.css';
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
		"content": `<defs><mask id="SVGVUfl9cJq"><path class="i-p09f t5pxry"/><path class="i4emph t5pxry"/></mask></defs><path mask="url(#SVGVUfl9cJq)" class="botfzx"/>`,
		"fallback": "line-md:minus-square-filled",
	});
}

export default Component;
