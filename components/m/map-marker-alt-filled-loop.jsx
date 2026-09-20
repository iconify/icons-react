import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojvagr.css';
import '../../css/d/dr9rsw.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-jkxijw.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvoBESbEU"><path class="ojvagr"/><circle class="dr9rsw"/></mask></defs><path mask="url(#SVGvoBESbEU)" class="botfzx"/>`,
		"fallback": "line-md:map-marker-alt-filled-loop",
	});
}

export default Component;
