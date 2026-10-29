import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa7yxxbyz.css';
import '../../css/o/oa3dzxuun.css';
import '../../css/f/f-planbwl.css';
import '../../css/o/o3a8pcdop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa7yxxbyz wm-k"/><path class="oa3dzxuun wm-k"/><path class="f-planbwl wm-a"/><path class="o3a8pcdop wm-a"/>`,
		"fallback": "withicons-bauhaus:terminal",
	});
}

export default Component;
