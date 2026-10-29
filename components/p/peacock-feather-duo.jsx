import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c-3-pwfis.css';
import '../../css/b/b5nir9bma.css';
import '../../css/k/kbd6eebjl.css';
import '../../css/m/mjzvuibua.css';
import '../../css/u/upbjgs79u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c-3-pwfis"/><path class="b5nir9bma wm-a"/><path class="kbd6eebjl wm-a"/><path class="mjzvuibua"/><path class="upbjgs79u wm-a"/></g>`,
		"fallback": "withicons:peacock-feather-duo",
	});
}

export default Component;
