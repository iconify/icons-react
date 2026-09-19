import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/drttxikxo.css';
import '../../css/c/cr3ta5bbg.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/g/guewfbcxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="drttxikxo"/><path class="cr3ta5bbg"/><path class="p9-zrkb4g"/><path class="guewfbcxi"/></g>`,
		"fallback": "iconoir:ios-settings",
	});
}

export default Component;
