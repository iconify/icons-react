import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/c/cf52fycgx.css';
import '../../css/u/u5_5228jl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path class="cf52fycgx"/><path class="u5_5228jl"/></g>`,
		"fallback": "icon-park-solid:lipstick-one",
	});
}

export default Component;
