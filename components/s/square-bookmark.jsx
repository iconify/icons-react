import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xr1d7qw6i.css';
import '../../css/u/u5rgp0bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xr1d7qw6i"/><path class="u5rgp0bvj"/></g>`,
		"fallback": "vadivam:square-bookmark",
	});
}

export default Component;
