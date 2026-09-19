import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah5v3fl3j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah5v3fl3j"/>`,
		"fallback": "fluent-mdl2:repo-solid",
	});
}

export default Component;
