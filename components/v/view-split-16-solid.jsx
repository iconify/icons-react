import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwm_ltnvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwm_ltnvq"/>`,
		"fallback": "sidekickicons:view-split-16-solid",
	});
}

export default Component;
