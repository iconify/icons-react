import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/fz97oyg2s.css';
import '../../css/x/xi1hb8ful.css';
import '../../css/b/b8gjm-bft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="fz97oyg2s"/><path class="xi1hb8ful"/><path class="b8gjm-bft"/></g>`,
		"fallback": "icon-park:rectangular-circular-connection",
	});
}

export default Component;
