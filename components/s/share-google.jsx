import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp5sfuo3e.css';
import '../../css/q/qcv-ztbrv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp5sfuo3e"/><path class="qcv-ztbrv"/>`,
		"fallback": "ei:share-google",
	});
}

export default Component;
