import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/l/lb-veokpk.css';
import '../../css/g/g-6s3ptim.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="lb-veokpk"/><path class="g-6s3ptim"/>`,
		"fallback": "energy-icons:vegan-20",
	});
}

export default Component;
