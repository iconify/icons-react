import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q97ltfs3e.css';
import '../../css/x/xftx2_1wf.css';
import '../../css/s/s9-jbqb3w.css';
import '../../css/j/j192bwbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q97ltfs3e wm-k"/><path class="wm-a xftx2_1wf"/><path class="s9-jbqb3w wm-a"/><path class="j192bwbjf wm-a"/>`,
		"fallback": "withicons-bauhaus:target",
	});
}

export default Component;
