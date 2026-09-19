import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/gcodxmblu.css';
import '../../css/l/l0-geycet.css';
import '../../css/l/lyj0dybbj.css';
import '../../css/q/qsbeqrbxm.css';
import '../../css/r/ryml8wbva.css';
import '../../css/q/qon7ixdhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="gcodxmblu"/><path class="l0-geycet"/><path class="lyj0dybbj"/><path class="qsbeqrbxm"/><path class="ryml8wbva"/><path class="qon7ixdhg"/></g>`,
		"fallback": "circle-flags:ni",
	});
}

export default Component;
