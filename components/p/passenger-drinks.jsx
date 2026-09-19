import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkohjf76e.css';
import '../../css/i/it25zdp1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkohjf76e"/><path class="it25zdp1p"/>`,
		"fallback": "carbon:passenger-drinks",
	});
}

export default Component;
