import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5is1to6c.css';
import '../../css/u/ud1-bgmma.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5is1to6c"/><path class="ud1-bgmma"/>`,
		"fallback": "selfhst:opentelemetry",
	});
}

export default Component;
