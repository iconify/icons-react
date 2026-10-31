import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whyzf3bzu.css';
import '../../css/z/zze7jxboh.css';
import '../../css/y/y4s7r7wer.css';
import '../../css/t/tvgikvb3s.css';
import '../../css/v/v57h3qglo.css';
import '../../css/m/myzmerb-d.css';
import '../../css/n/nip8lkbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whyzf3bzu wm-k"/><path class="wm-a zze7jxboh"/><path class="wm-deco y4s7r7wer"/><path class="tvgikvb3s wm-k"/><path class="v57h3qglo wm-a"/><path class="myzmerb-d wm-shadow"/><path class="nip8lkbhn wm-shine"/></g>`,
		"fallback": "withicons-valentine:radio-tower",
	});
}

export default Component;
