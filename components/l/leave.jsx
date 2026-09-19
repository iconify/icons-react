import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfqid2sdz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfqid2sdz"/>`,
		"fallback": "fluent-mdl2:leave",
	});
}

export default Component;
