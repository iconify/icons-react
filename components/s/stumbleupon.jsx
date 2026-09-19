import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4ijmfbcv.css';
import '../../css/d/dj_p1sbgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4ijmfbcv"/><path class="dj_p1sbgi"/>`,
		"fallback": "flat-color-icons:stumbleupon",
	});
}

export default Component;
