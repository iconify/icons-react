import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx4fd5nos.css';
import '../../css/z/zama-11es.css';
import '../../css/y/yvy3k0pml.css';
import '../../css/f/fcme7kbbb.css';
import '../../css/m/me5xyh10x.css';
import '../../css/d/dxxr4jbcl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx4fd5nos"/><path class="zama-11es"/><path class="yvy3k0pml"/><path class="fcme7kbbb"/><path class="me5xyh10x"/><path class="dxxr4jbcl"/>`,
		"fallback": "energy-icons:turbine-icing-20-bold",
	});
}

export default Component;
