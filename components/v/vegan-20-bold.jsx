import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/x/x8h4_ob2m.css';
import '../../css/r/rhyc4s3pl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="x8h4_ob2m"/><path class="rhyc4s3pl"/>`,
		"fallback": "energy-icons:vegan-20-bold",
	});
}

export default Component;
