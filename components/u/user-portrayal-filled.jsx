import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua3jl-yvs.css';
import '../../css/q/q3ohsnbcz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua3jl-yvs"/><path clip-rule="evenodd" class="q3ohsnbcz"/>`,
		"fallback": "lsicon:user-portrayal-filled",
	});
}

export default Component;
