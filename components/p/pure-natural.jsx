import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/u/ut61smpvp.css';
import '../../css/y/yjeye1b2k.css';
import '../../css/a/a1x4rgbfd.css';
import '../../css/d/dfqawdl-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ut61smpvp"/><path class="yjeye1b2k"/><path clip-rule="evenodd" class="a1x4rgbfd"/><path clip-rule="evenodd" class="dfqawdl-z"/></g>`,
		"fallback": "icon-park:pure-natural",
	});
}

export default Component;
