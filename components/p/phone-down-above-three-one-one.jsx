import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkser5_na.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkser5_na"/>`,
		"fallback": "pinhead:phone-down-above-three-one-one",
	});
}

export default Component;
