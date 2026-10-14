import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nucfi8f3n.css';
import '../../css/o/ov2t1mbqu.css';
import '../../css/g/gj9n53egs.css';
import '../../css/w/wstfvabju.css';
import '../../css/m/m__s3mb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="nucfi8f3n"/><path class="ov2t1mbqu"/><path class="gj9n53egs"/><path class="wstfvabju"/><path class="m__s3mb2o"/></g>`,
		"fallback": "matita:palette",
	});
}

export default Component;
