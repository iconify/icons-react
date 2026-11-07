import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r34ssebvg.css';
import '../../css/k/kroiddczm.css';
import '../../css/m/mmoj81bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r34ssebvg"/><path class="kroiddczm"/><path class="mmoj81bwq"/>`,
		"fallback": "solar:suspension-bolt-bold",
	});
}

export default Component;
