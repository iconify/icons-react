import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhc6si7sd.css';
import '../../css/e/eon83uilw.css';
import '../../css/b/b9q5u9ytg.css';
import '../../css/y/ydeep_bhd.css';
import '../../css/h/h188_u_6b.css';
import '../../css/q/qdch6oblc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhc6si7sd"/><path class="eon83uilw"/><path class="b9q5u9ytg"/><path class="ydeep_bhd"/><path class="h188_u_6b"/><path class="qdch6oblc"/>`,
		"fallback": "selfhst:trailarr",
	});
}

export default Component;
