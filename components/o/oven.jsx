import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7a4v0blj.css';
import '../../css/q/qxy5ofb9u.css';
import '../../css/x/xb9-2_4uz.css';
import '../../css/p/pkxzmlbgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="v7a4v0blj"/><rect class="qxy5ofb9u"/><circle class="xb9-2_4uz"/><path class="pkxzmlbgt"/></g>`,
		"fallback": "icon-park-outline:oven",
	});
}

export default Component;
