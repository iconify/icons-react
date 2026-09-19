import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvc-74b_m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvc-74b_m"/>`,
		"fallback": "cib:visual-studio-code",
	});
}

export default Component;
