import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e95jrdbgt.css';
import '../../css/d/dsfqm53kn.css';
import '../../css/q/qh4eix07z.css';
import '../../css/i/i1-6abcsx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="e95jrdbgt"/><path class="dsfqm53kn"/><path class="qh4eix07z"/><path class="i1-6abcsx"/></g>`,
		"fallback": "icon-park:road-sign",
	});
}

export default Component;
