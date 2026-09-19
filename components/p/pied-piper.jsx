import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfw1rib9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfw1rib9y"/>`,
		"fallback": "grommet-icons:pied-piper",
	});
}

export default Component;
