import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut4oyjkxj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zq1q3021a.css';
import '../../css/s/s5a9wrp7u.css';
import '../../css/a/awed_9l6n.css';
import '../../css/g/gfovhfd2g.css';
import '../../css/i/iaz41ubnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ut4oyjkxj"/><g class="dt0cm9dhy primary"><path class="zq1q3021a"/><path class="s5a9wrp7u"/><path class="awed_9l6n"/><path class="gfovhfd2g"/><path class="iaz41ubnk"/></g>`,
		"fallback": "iconaut:radio-duo",
	});
}

export default Component;
