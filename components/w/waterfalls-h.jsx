import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3sqil9-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3sqil9-m"/>`,
		"fallback": "icon-park-solid:waterfalls-h",
	});
}

export default Component;
