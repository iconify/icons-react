import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd9-tny0x.css';
import '../../css/n/ndt9adc_x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd9-tny0x"/><path class="ndt9adc_x"/>`,
		"fallback": "devicon:sqlalchemy-wordmark",
	});
}

export default Component;
