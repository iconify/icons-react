import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f70axpsoe.css';
import '../../css/w/w7hnm_bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f70axpsoe"/><path class="w7hnm_bhf"/></g>`,
		"fallback": "streamline-ultimate:job-search-man",
	});
}

export default Component;
