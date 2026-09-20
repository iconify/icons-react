import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wtx3fkxtb.css';
import '../../css/q/qe_74voyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wtx3fkxtb"/><path class="qe_74voyj"/></g>`,
		"fallback": "reicon:sticker",
	});
}

export default Component;
