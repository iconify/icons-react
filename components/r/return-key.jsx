import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai8h5-bdq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai8h5-bdq"/>`,
		"fallback": "fluent-mdl2:return-key",
	});
}

export default Component;
