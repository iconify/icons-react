import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh620fbwj.css';
import '../../css/d/dcd3u2sfd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh620fbwj"/><path clip-rule="evenodd" class="dcd3u2sfd"/>`,
		"fallback": "qlementine-icons:navigation-compass-16",
	});
}

export default Component;
