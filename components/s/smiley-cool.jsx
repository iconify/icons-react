import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u46bu-2ul.css';
import '../../css/t/tss_5rb0s.css';
import '../../css/d/dj7yv-i3u.css';
import '../../css/w/wxqbfhwkx.css';
import '../../css/f/f2hh-jbjl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u46bu-2ul"/><path class="tss_5rb0s"/><path class="dj7yv-i3u"/><path class="wxqbfhwkx"/><path class="f2hh-jbjl"/></g>`,
		"fallback": "streamline-color:smiley-cool",
	});
}

export default Component;
