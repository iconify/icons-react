import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pj9u6obqg.css';
import '../../css/z/z239zwusj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pj9u6obqg"/><path class="z239zwusj"/></g>`,
		"fallback": "streamline-ultimate:smart-watch-circle",
	});
}

export default Component;
