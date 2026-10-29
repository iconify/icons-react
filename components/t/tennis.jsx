import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nurbkge2f.css';
import '../../css/h/hbh4leb5n.css';
import '../../css/k/k9cs5b8pr.css';
import '../../css/e/eh5ptc7tg.css';
import '../../css/t/tona-pq9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nurbkge2f wm-k"/><path class="hbh4leb5n wm-a"/><path class="k9cs5b8pr wm-a"/><path class="eh5ptc7tg wm-a"/><path class="tona-pq9i wm-a"/>`,
		"fallback": "withicons-bauhaus:tennis",
	});
}

export default Component;
