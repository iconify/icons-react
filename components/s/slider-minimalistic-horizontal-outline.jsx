import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b15_6um9z.css';
import '../../css/o/o2ipnf05e.css';
import '../../css/o/o53u6goso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b15_6um9z"/><path clip-rule="evenodd" class="o2ipnf05e"/><path class="o53u6goso"/>`,
		"fallback": "solar:slider-minimalistic-horizontal-outline",
	});
}

export default Component;
