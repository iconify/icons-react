import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afs_3s29k.css';
import '../../css/g/gp4srle1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afs_3s29k"/><path class="gp4srle1z"/>`,
		"fallback": "withicons-bauhaus:trending-down",
	});
}

export default Component;
