import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/mzohia.css';
import '../../css/z/zcfamf.css';
import '../../css/s/so-from-28.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c mzohia"/><path class="a0m25c zcfamf"/>`,
		"fallback": "line-md:turn-sharp-right",
	});
}

export default Component;
