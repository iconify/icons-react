import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew13tbxvb.css';
import '../../css/a/al19bfb5b.css';
import '../../css/j/jmiuoqhtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew13tbxvb wm-k"/><path class="al19bfb5b wm-a"/><path class="jmiuoqhtu wm-a"/>`,
		"fallback": "withicons-bauhaus:rss",
	});
}

export default Component;
