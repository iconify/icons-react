import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcwpesbdp.css';
import '../../css/d/dxcl0tb7m.css';
import '../../css/i/iufaf7g1w.css';
import '../../css/g/grsyl7buz.css';
import '../../css/v/vlu66r-gt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcwpesbdp"/><path class="dxcl0tb7m"/><path class="iufaf7g1w"/><path class="grsyl7buz"/><path class="vlu66r-gt"/>`,
		"fallback": "flag:sj-1x1",
	});
}

export default Component;
