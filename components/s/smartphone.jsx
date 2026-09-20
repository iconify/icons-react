import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzxq6ibab.css';
import '../../css/a/ajxbbcbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzxq6ibab"/><path class="ajxbbcbzs"/>`,
		"fallback": "stash:smartphone",
	});
}

export default Component;
