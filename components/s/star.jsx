import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6cgcp9gf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6cgcp9gf"/>`,
		"fallback": "fa-solid:star",
	});
}

export default Component;
