import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuc6r60rn.css';
import '../../css/m/m041_sk4u.css';
import '../../css/y/yp1-ku-9n.css';
import '../../css/m/mvaxu_b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuc6r60rn"/><path class="m041_sk4u"/><path class="yp1-ku-9n"/><path class="mvaxu_b9c"/>`,
		"fallback": "solar:star-fall-bold",
	});
}

export default Component;
