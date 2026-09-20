import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sfocs9iyr.css';
import '../../css/z/zo2m4cccf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sfocs9iyr"/><path class="zo2m4cccf"/></g>`,
		"fallback": "reicon:microphone-slash2",
	});
}

export default Component;
