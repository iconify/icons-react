import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f4u2m_vyc.css';
import '../../css/g/gjj8xkb8a.css';
import '../../css/g/g8ehjj7yy.css';
import '../../css/k/ksdsltdkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="f4u2m_vyc"/><path class="gjj8xkb8a wm-shine"/><path class="g8ehjj7yy wm-k"/><path class="ksdsltdkn wm-a"/></g>`,
		"fallback": "withicons-kawaii:server",
	});
}

export default Component;
