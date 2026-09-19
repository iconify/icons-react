import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/c/ci_ovabam.css';
import '../../css/s/sbufebbbn.css';
import '../../css/f/f41peactd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="shu3xdl9q"/><path class="ci_ovabam"/><path class="sbufebbbn"/><path class="f41peactd"/></g>`,
		"fallback": "hugeicons:siri",
	});
}

export default Component;
