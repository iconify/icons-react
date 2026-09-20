import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/v/vlsv6c.css';
import '../../css/l/lo--7m.css';
import '../../css/x/xx5a5k.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c vlsv6c"/><path class="a0m25c lo--7m"/><path class="a0m25c xx5a5k"/>`,
		"fallback": "line-md:logout",
	});
}

export default Component;
