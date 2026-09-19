import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nprfbcccb.css';
import '../../css/k/kibf-0bix.css';
import '../../css/o/o_yq_qbpx.css';
import '../../css/w/wmwdhvb1e.css';
import '../../css/p/pnrjk-s9i.css';
import '../../css/x/xe0whgu9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nprfbcccb"/><path clip-rule="evenodd" class="kibf-0bix"/><path clip-rule="evenodd" class="o_yq_qbpx"/><path clip-rule="evenodd" class="wmwdhvb1e"/><path clip-rule="evenodd" class="pnrjk-s9i"/><path class="xe0whgu9o"/>`,
		"fallback": "cuida:notification-bell-timer-outline",
	});
}

export default Component;
