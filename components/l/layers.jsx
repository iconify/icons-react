import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh9yt4b_y.css';
import '../../css/u/uezeccc_d.css';
import '../../css/u/uyina-bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh9yt4b_y wm-a"/><path class="uezeccc_d wm-k"/><path class="uyina-bcq wm-k"/>`,
		"fallback": "withicons-bauhaus:layers",
	});
}

export default Component;
