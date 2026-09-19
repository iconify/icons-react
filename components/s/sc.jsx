import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/az4xxt77u.css';
import '../../css/a/am4lt2gth.css';
import '../../css/v/vfq30j15m.css';
import '../../css/d/d6vschbet.css';
import '../../css/i/ix8i5lbjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="az4xxt77u"/><path class="am4lt2gth"/><path class="vfq30j15m"/><path class="d6vschbet"/><path class="ix8i5lbjc"/></g>`,
		"fallback": "circle-flags:sc",
	});
}

export default Component;
