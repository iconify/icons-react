import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk7y8zbhx.css';
import '../../css/a/a_5fpzbdi.css';
import '../../css/y/yhg5xibvo.css';
import '../../css/b/b8he7k8qo.css';
import '../../css/y/yql12obig.css';
import '../../css/c/ca21btvtc.css';
import '../../css/i/ix88_1q-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sk7y8zbhx wm-k"/><path class="a_5fpzbdi wm-k"/><path class="wm-k yhg5xibvo"/><path class="b8he7k8qo wm-shine"/><path class="wm-a yql12obig"/><path class="ca21btvtc wm-a"/><path class="ix88_1q-b wm-a"/></g>`,
		"fallback": "withicons-anime:maximize",
	});
}

export default Component;
