import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yuyr5dx8j.css';
import '../../css/i/i4cp03b1y.css';
import '../../css/v/va_yq2bao.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="yuyr5dx8j"/><path class="i4cp03b1y"/></g><path class="va_yq2bao"/>`,
		"fallback": "garden:lightbulb-stroke-16",
	});
}

export default Component;
