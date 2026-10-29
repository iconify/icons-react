import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_czpwkxx.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/y/ymb10gb6t.css';
import '../../css/a/apse0o7pc.css';
import '../../css/a/ampzbnbho.css';
import '../../css/b/bei967bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k y_czpwkxx"/><path class="mcj8uxbod wm-k"/><path class="wm-s ymb10gb6t"/><path class="apse0o7pc wm-s"/><path class="ampzbnbho wm-s"/><path class="bei967bcz wm-s"/>`,
		"fallback": "withicons-bauhaus:user-pen",
	});
}

export default Component;
