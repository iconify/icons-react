import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hblu1qb3f.css';
import '../../css/o/o-a8ss1od.css';
import '../../css/r/r2mg1wbgz.css';
import '../../css/g/gw0_bj--j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hblu1qb3f"/><path class="o-a8ss1od"/><path class="r2mg1wbgz"/><path class="gw0_bj--j"/>`,
		"fallback": "carbon:operation",
	});
}

export default Component;
