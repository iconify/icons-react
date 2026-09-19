import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxn-31-fu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxn-31-fu"/>`,
		"fallback": "fluent-mdl2:ladybug-solid",
	});
}

export default Component;
