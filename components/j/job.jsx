import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvvn3n76x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvvn3n76x"/>`,
		"fallback": "eos-icons:job",
	});
}

export default Component;
