import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev7fw9bzl.css';
import '../../css/p/pmjredcwv.css';
import '../../css/y/ymp9twb7b.css';
import '../../css/d/dqf9rfonk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ev7fw9bzl"/><path class="pmjredcwv"/><path class="ymp9twb7b"/><path class="dqf9rfonk"/></g>`,
		"fallback": "fluent-emoji-flat:syringe",
	});
}

export default Component;
