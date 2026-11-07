import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3_gtob6t.css';
import '../../css/b/bz0qnvbjd.css';
import '../../css/f/f_w5wdbfk.css';
import '../../css/b/bwm8hf_io.css';
import '../../css/r/r6zg66thw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3_gtob6t"/><path class="bz0qnvbjd"/><path clip-rule="evenodd" class="f_w5wdbfk"/><path class="bwm8hf_io"/><path class="r6zg66thw"/>`,
		"fallback": "solar:music-library-bold",
	});
}

export default Component;
