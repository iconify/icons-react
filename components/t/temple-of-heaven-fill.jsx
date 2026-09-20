import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0sto2usv.css';
import '../../css/l/lhhhg9ebv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0sto2usv"/><path class="lhhhg9ebv"/>`,
		"fallback": "mingcute:temple-of-heaven-fill",
	});
}

export default Component;
