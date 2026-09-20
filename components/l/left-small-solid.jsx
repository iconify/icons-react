import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zut3d2byv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zut3d2byv"/>`,
		"fallback": "teenyicons:left-small-solid",
	});
}

export default Component;
