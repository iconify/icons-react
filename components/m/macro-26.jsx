import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewz6b-n0l.css';
import '../../css/x/x2s3-fbvs.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewz6b-n0l"/><path class="x2s3-fbvs"/>`,
		"fallback": "garden:macro-26",
	});
}

export default Component;
