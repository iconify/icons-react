import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umdp1wo1l.css';
import '../../css/x/x1f6fx_5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umdp1wo1l"/><path class="x1f6fx_5j"/>`,
		"fallback": "streamline-pixel:weather-rainbow",
	});
}

export default Component;
