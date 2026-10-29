import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq5w33b7p.css';
import '../../css/c/cjpxibctb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq5w33b7p wm-k"/><path class="cjpxibctb wm-a"/>`,
		"fallback": "withicons-bauhaus:skip-forward",
	});
}

export default Component;
