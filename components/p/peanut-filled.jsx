import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w74w-s.css';
import '../../css/f/f2oxlq.css';
import '../../css/j/jy0aik.css';
import '../../css/m/m0nmbr.css';
import '../../css/r/r3-1yx.css';
import '../../css/z/zfm7bo.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQvGvmcZp"><path class="w74w-s"/><circle class="f2oxlq jy0aik"/><circle class="f2oxlq m0nmbr"/><circle class="f2oxlq r3-1yx"/><circle class="f2oxlq zfm7bo"/></mask></defs><path mask="url(#SVGQvGvmcZp)" class="botfzx"/>`,
		"fallback": "line-md:peanut-filled",
	});
}

export default Component;
