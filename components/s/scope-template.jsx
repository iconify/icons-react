import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwe_44r1j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwe_44r1j"/>`,
		"fallback": "fluent-mdl2:scope-template",
	});
}

export default Component;
