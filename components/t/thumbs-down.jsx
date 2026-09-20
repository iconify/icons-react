import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ga_sunbve.css';
import '../../css/v/v9_s8abew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect transform="rotate(180 21.25 16.8)" class="ga_sunbve"/><path class="v9_s8abew"/></g>`,
		"fallback": "proicons:thumbs-down",
	});
}

export default Component;
