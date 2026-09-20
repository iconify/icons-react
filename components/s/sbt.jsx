import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_mh4vbdu.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_mh4vbdu"/>`,
		"fallback": "material-icon-theme:sbt",
	});
}

export default Component;
