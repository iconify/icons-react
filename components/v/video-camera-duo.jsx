import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bo1uwgbfy.css';
import '../../css/v/vfx376v4r.css';
import '../../css/r/rcb7clbki.css';
import '../../css/z/za3dt0bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bo1uwgbfy"/><path class="vfx376v4r wm-a"/><path class="rcb7clbki wm-a"/><path class="za3dt0bho"/></g>`,
		"fallback": "withicons:video-camera-duo",
	});
}

export default Component;
