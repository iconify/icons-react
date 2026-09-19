import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl5zwabiv.css';
import '../../css/q/qm-avg1-g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl5zwabiv"/><path class="qm-avg1-g"/>`,
		"fallback": "devicon:nomad-wordmark",
	});
}

export default Component;
