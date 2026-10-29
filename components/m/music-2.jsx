import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptrstf8jd.css';
import '../../css/d/duepnlfrw.css';
import '../../css/f/fhzdvq_ms.css';
import '../../css/c/ch5bp1_kl.css';
import '../../css/j/jg461zbst.css';
import '../../css/o/o4gmu6z6q.css';
import '../../css/s/s2jz5hh9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptrstf8jd wm-shadow"/><path class="duepnlfrw wm-k"/><path class="fhzdvq_ms wm-k"/><path class="ch5bp1_kl wm-k"/><path class="jg461zbst wm-k"/><path class="o4gmu6z6q wm-k"/><path class="s2jz5hh9v wm-shine"/>`,
		"fallback": "withicons-pastel:music-2",
	});
}

export default Component;
