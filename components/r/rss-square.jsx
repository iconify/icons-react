import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/r/r1mdtod-s.css';
import '../../css/v/vq3snsbdj.css';
import '../../css/k/kj3_rlb2o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="r1mdtod-s"/><path class="vq3snsbdj"/><path class="kj3_rlb2o"/></g>`,
		"fallback": "streamline-plump:rss-square",
	});
}

export default Component;
