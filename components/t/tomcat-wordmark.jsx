import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfdu8qvwb.css';
import '../../css/u/uu6zwkb3n.css';
import '../../css/g/g9o1zvaty.css';
import '../../css/p/pwmut0vcg.css';
import '../../css/x/xaaunht0n.css';
import '../../css/e/eyk905ctm.css';
import '../../css/s/sfcnqhbjp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfdu8qvwb"/><path class="uu6zwkb3n"/><path class="g9o1zvaty"/><path class="pwmut0vcg"/><path class="xaaunht0n"/><path class="eyk905ctm"/><path class="sfcnqhbjp"/>`,
		"fallback": "devicon:tomcat-wordmark",
	});
}

export default Component;
