import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp_e8dmbw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp_e8dmbw"/>`,
		"fallback": "streamline-block:other-ui-chat",
	});
}

export default Component;
