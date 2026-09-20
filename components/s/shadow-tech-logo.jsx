import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqo_owmxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqo_owmxq"/>`,
		"fallback": "streamline-logos:shadow-tech-logo",
	});
}

export default Component;
