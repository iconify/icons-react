import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqk0_3bfl.css';
import '../../css/l/lgb7uffyh.css';
import '../../css/s/syaz7gedi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqk0_3bfl"/><path class="lgb7uffyh"/><path class="syaz7gedi"/>`,
		"fallback": "streamline-ultimate:office-stamp-document-bold",
	});
}

export default Component;
