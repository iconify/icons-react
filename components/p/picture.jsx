import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/s/sg45gybzf.css';
import '../../css/z/z5ev44bvw.css';
import '../../css/q/qndu10yle.css';
import '../../css/o/oea2wbcgo.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="sg45gybzf"/><path class="z5ev44bvw"/><path class="qndu10yle"/><path class="oea2wbcgo"/></g>`,
		"fallback": "streamline-stickies-color:picture",
	});
}

export default Component;
