import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m286f_qbu.css';
import '../../css/m/mkv27kkfu.css';
import '../../css/i/ikqw28z5l.css';
import '../../css/t/t_yqvvbrg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m286f_qbu"/><path class="mkv27kkfu"/><path class="ikqw28z5l"/><path class="t_yqvvbrg"/></g>`,
		"fallback": "glyphs:rolling-eyes",
	});
}

export default Component;
