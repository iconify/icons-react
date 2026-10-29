import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7gfubdlt.css';
import '../../css/l/lrkjd1bsy.css';
import '../../css/l/lriab0bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7gfubdlt wm-a"/><path class="lrkjd1bsy wm-k"/><path class="lriab0bfg wm-k"/>`,
		"fallback": "withicons-bauhaus:umbrella",
	});
}

export default Component;
