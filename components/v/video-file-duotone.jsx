import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9h3i4b2f.css';
import '../../css/a/a7grcu7de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9h3i4b2f"/><path class="a7grcu7de"/>`,
		"fallback": "lets-icons:video-file-duotone",
	});
}

export default Component;
