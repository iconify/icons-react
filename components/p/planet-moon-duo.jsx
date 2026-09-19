import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1i6-zboz.css';
import '../../css/h/hd2gueb5d.css';
import '../../css/l/ls79o6b5j.css';
import '../../css/v/vuz6fynvu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i1i6-zboz"/><path clip-rule="evenodd" class="hd2gueb5d"/><path class="ls79o6b5j"/><path class="vuz6fynvu"/></g>`,
		"fallback": "glyphs:planet-moon-duo",
	});
}

export default Component;
