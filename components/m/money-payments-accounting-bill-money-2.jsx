import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez1rm3mhs.css';
import '../../css/g/gk8rzabdo.css';
import '../../css/h/hl1-gpb4h.css';
import '../../css/d/d48ey4_0w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez1rm3mhs"/><path class="gk8rzabdo"/><path class="hl1-gpb4h"/><path class="d48ey4_0w"/>`,
		"fallback": "streamline-pixel:money-payments-accounting-bill-money-2",
	});
}

export default Component;
