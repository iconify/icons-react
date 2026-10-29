import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zabkgx3jw.css';
import '../../css/p/p-s04tbug.css';
import '../../css/s/sonegacxa.css';
import '../../css/b/b8fnn2y3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zabkgx3jw"/><path class="p-s04tbug wm-a"/><path class="sonegacxa wm-k"/><path class="b8fnn2y3r wm-a"/></g>`,
		"fallback": "withicons:square-code-sketch",
	});
}

export default Component;
