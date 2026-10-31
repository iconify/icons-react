import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/al_jdya1p.css';
import '../../css/e/ezjocxztq.css';
import '../../css/k/ksjhfan6f.css';
import '../../css/v/vnmjnibma.css';
import '../../css/c/c6fh6tjah.css';
import '../../css/t/tgamvhtml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="al_jdya1p wm-shadow"/><path class="ezjocxztq"/><path class="ksjhfan6f"/><path class="vnmjnibma"/><path class="c6fh6tjah"/><path class="tgamvhtml"/></g>`,
		"fallback": "withicons-retro:newspaper",
	});
}

export default Component;
