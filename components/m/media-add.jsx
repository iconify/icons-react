import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ifm72mw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_ifm72mw"/>`,
		"fallback": "fluent-mdl2:media-add",
	});
}

export default Component;
