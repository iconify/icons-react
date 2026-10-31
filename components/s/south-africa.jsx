import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf0et6bvn.css';
import '../../css/v/v9c9n62_b.css';
import '../../css/g/g7-s2nbhk.css';
import '../../css/l/l-z5vg59w.css';
import '../../css/s/s69kncvct.css';
import '../../css/a/a7ocenhtx.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf0et6bvn"/><path class="v9c9n62_b"/><path class="g7-s2nbhk"/><path class="l-z5vg59w"/><path class="s69kncvct"/><path class="a7ocenhtx"/>`,
		"fallback": "tabler-flags:south-africa",
	});
}

export default Component;
