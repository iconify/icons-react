import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ertjoi4oz.css';
import '../../css/a/alq4kgbda.css';
import '../../css/g/g85390r2q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ertjoi4oz"/><path class="alq4kgbda"/><path class="g85390r2q"/>`,
		"fallback": "energy-icons:lathe-48",
	});
}

export default Component;
