import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgbwqz.css';
import '../../css/y/yy2bbs.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-54.css';
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
		"content": `<defs><mask id="SVGCTeHvcgE"><path class="hgbwqz"/><circle class="yy2bbs"/></mask></defs><path mask="url(#SVGCTeHvcgE)" class="botfzx"/>`,
		"fallback": "line-md:switch-filled",
	});
}

export default Component;
