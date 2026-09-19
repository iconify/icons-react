import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em3b8vi0o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em3b8vi0o"/>`,
		"fallback": "fluent-mdl2:trackers-mirrored",
	});
}

export default Component;
