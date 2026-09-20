import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5tm-zk0d.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5tm-zk0d"/>`,
		"fallback": "wpf:nfccheckpoint",
	});
}

export default Component;
