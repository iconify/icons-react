import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt38y4bnd.css';
import '../../css/v/va4y6ihja.css';
import '../../css/t/t-w02pb9s.css';
import '../../css/m/m-jydibrh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yt38y4bnd"/><path class="va4y6ihja"/><path clip-rule="evenodd" class="t-w02pb9s"/><path class="m-jydibrh"/></g>`,
		"fallback": "glyphs:laptop-cog-duo",
	});
}

export default Component;
