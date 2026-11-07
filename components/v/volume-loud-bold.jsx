import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enqq2_4zj.css';
import '../../css/h/h12fbya6z.css';
import '../../css/k/kn7h3_b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enqq2_4zj"/><path class="h12fbya6z"/><path class="kn7h3_b3d"/>`,
		"fallback": "solar:volume-loud-bold",
	});
}

export default Component;
