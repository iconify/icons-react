import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2q1i3bkb.css';
import '../../css/n/nvgz7z71r.css';
import '../../css/v/vm0f_zibb.css';
import '../../css/p/pkfb3qiwy.css';
import '../../css/v/vt-phz1qk.css';
import '../../css/a/apbrzvf8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2q1i3bkb wm-k"/><path class="nvgz7z71r wm-k"/><path class="vm0f_zibb wm-k"/><path class="pkfb3qiwy wm-k"/><path class="vt-phz1qk wm-shine"/><path class="apbrzvf8p wm-a"/></g>`,
		"fallback": "withicons-anime:magnet",
	});
}

export default Component;
