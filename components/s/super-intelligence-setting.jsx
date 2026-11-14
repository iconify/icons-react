import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/ss9ec4bfo.css';
import '../../css/i/i1lofvn4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ss9ec4bfo"/><path class="i1lofvn4j"/></g>`,
		"fallback": "hugeicons:super-intelligence-setting",
	});
}

export default Component;
