import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/x6zsqtbjm.css';
import '../../css/p/p8byw9pyu.css';
import '../../css/v/vfms9tbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="x6zsqtbjm"/><path class="p8byw9pyu"/><path class="vfms9tbqm"/></g>`,
		"fallback": "streamline-cyber:video-meeting-group",
	});
}

export default Component;
