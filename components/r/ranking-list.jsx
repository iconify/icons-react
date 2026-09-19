import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vp8jg4bpk.css';
import '../../css/z/zotbml7et.css';
import '../../css/v/vuq5iub0q.css';
import '../../css/i/i3e4kwb2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="vp8jg4bpk"/><path class="zotbml7et"/><path class="vuq5iub0q"/><path class="i3e4kwb2n"/></g>`,
		"fallback": "icon-park:ranking-list",
	});
}

export default Component;
