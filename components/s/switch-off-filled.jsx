import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgbwqz.css';
import '../../css/m/m9pw8h.css';
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
		"content": `<defs><mask id="SVGNgpFUEoj"><path class="hgbwqz"/><circle class="m9pw8h"/></mask></defs><path mask="url(#SVGNgpFUEoj)" class="botfzx"/>`,
		"fallback": "line-md:switch-off-filled",
	});
}

export default Component;
