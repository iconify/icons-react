import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8s_muoev.css';
import '../../css/o/oyijh1kdw.css';

const viewBox = {"width":670,"height":124};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8s_muoev"/><path class="oyijh1kdw"/>`,
		"fallback": "thesvg-color:mitsubishi-heavy",
	});
}

export default Component;
