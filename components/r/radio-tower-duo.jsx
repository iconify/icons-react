import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyvqwdbjf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lexz42b7p.css';
import '../../css/y/ywj31k8iz.css';
import '../../css/o/oxecvfdvd.css';
import '../../css/a/awd6s5pjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyvqwdbjf secondary"/><g class="dt0cm9dhy primary"><path class="lexz42b7p"/><path class="ywj31k8iz"/><path class="oxecvfdvd"/><path class="awd6s5pjb"/></g>`,
		"fallback": "iconaut:radio-tower-duo",
	});
}

export default Component;
