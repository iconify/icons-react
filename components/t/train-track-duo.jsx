import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvprmjb2q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kd2ormbzf.css';
import '../../css/c/cggwmabhq.css';
import '../../css/u/u8bu0m_-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvprmjb2q secondary"/><g class="dt0cm9dhy primary"><path class="kd2ormbzf"/><path class="cggwmabhq"/><path class="u8bu0m_-w"/></g>`,
		"fallback": "iconaut:train-track-duo",
	});
}

export default Component;
