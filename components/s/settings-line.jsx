import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c64wkyboh.css';
import '../../css/a/az06ycclz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c64wkyboh clr-i-outline clr-i-outline-path-1"/><path class="az06ycclz clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:settings-line",
	});
}

export default Component;
