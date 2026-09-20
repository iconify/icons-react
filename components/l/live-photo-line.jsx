import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etl6gjblu.css';
import '../../css/c/czl4vwb8t.css';
import '../../css/b/bmgtm8_um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="etl6gjblu"/><path class="czl4vwb8t"/><path class="bmgtm8_um"/>`,
		"fallback": "mingcute:live-photo-line",
	});
}

export default Component;
