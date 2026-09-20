import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ycyt.css';
import '../../css/e/ewtvdy.css';
import '../../css/t/tt3b6d.css';
import '../../css/s/s9nboe.css';
import '../../css/i/i7fxbk.css';
import '../../css/y/ywk93s.css';
import '../../css/e/ex4uqx.css';
import '../../css/z/znrilg.css';
import '../../css/b/botfzx.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAAuhyDsX"><path class="w7ycyt"/><path class="ewtvdy tt3b6d"/><path class="ewtvdy s9nboe"/><circle class="i7fxbk ywk93s"/><circle class="ex4uqx i7fxbk"/><circle class="i7fxbk znrilg"/></mask></defs><path mask="url(#SVGAAuhyDsX)" class="botfzx"/>`,
		"fallback": "line-md:mushroom-filled",
	});
}

export default Component;
