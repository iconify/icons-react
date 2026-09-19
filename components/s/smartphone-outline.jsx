import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeeel25yq.css';
import '../../css/l/lx933dbek.css';
import '../../css/d/dzzm5i91a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeeel25yq"/><circle class="lx933dbek"/><path class="dzzm5i91a"/>`,
		"fallback": "eva:smartphone-outline",
	});
}

export default Component;
