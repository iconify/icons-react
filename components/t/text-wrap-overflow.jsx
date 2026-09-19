import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gzebls86q.css';
import '../../css/v/vuampqbsn.css';
import '../../css/l/lr-uxlbnw.css';
import '../../css/l/lfj1sdbtj.css';
import '../../css/b/b29kr7l6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="gzebls86q"/><path class="vuampqbsn"/><path class="lr-uxlbnw"/><path class="lfj1sdbtj"/><path class="b29kr7l6m"/></g>`,
		"fallback": "icon-park:text-wrap-overflow",
	});
}

export default Component;
