import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_kc2bft.css';
import '../../css/q/qxu9d8l6m.css';
import '../../css/t/thy0iw71r.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1_kc2bft"/><path class="qxu9d8l6m"/><path class="thy0iw71r"/>`,
		"fallback": "clarity:launchpad-solid",
	});
}

export default Component;
