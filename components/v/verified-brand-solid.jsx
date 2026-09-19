import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv46ilbby.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv46ilbby"/>`,
		"fallback": "fluent-mdl2:verified-brand-solid",
	});
}

export default Component;
