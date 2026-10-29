import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nex2afaxw.css';
import '../../css/d/drkbb0zjj.css';
import '../../css/x/xxi9lkb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nex2afaxw"/><path class="drkbb0zjj"/><path class="xxi9lkb7z"/></g>`,
		"fallback": "withicons-bauhaus:love-lock",
	});
}

export default Component;
