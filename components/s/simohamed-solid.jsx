import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml6fninwt.css';
import '../../css/w/wlyltdbux.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml6fninwt"/><path clip-rule="evenodd" class="wlyltdbux"/>`,
		"fallback": "teenyicons:simohamed-solid",
	});
}

export default Component;
