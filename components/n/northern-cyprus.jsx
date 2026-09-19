import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vuhojpvyp.css';
import '../../css/q/qs0qpla7y.css';
import '../../css/g/g33ifmbin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="vuhojpvyp"/><path class="qs0qpla7y"/><path class="g33ifmbin"/></g>`,
		"fallback": "circle-flags:northern-cyprus",
	});
}

export default Component;
