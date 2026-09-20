import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c02qj952z.css';
import '../../css/e/eoz3msbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c02qj952z"/><path class="eoz3msbqe"/></g>`,
		"fallback": "proicons:treasure-chest",
	});
}

export default Component;
