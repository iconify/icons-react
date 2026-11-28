import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl3cvobbt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l24zqccfl.css';
import '../../css/q/qiuzifbed.css';
import '../../css/q/q6vbnacif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl3cvobbt secondary"/><g class="dt0cm9dhy primary"><path class="l24zqccfl"/><path class="qiuzifbed"/><path class="q6vbnacif"/></g>`,
		"fallback": "iconaut:lamp-desk-duo",
	});
}

export default Component;
