import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siwllabzz.css';
import '../../css/n/no61rhzxq.css';
import '../../css/g/gnzoq5b8p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siwllabzz"/><path class="no61rhzxq"/><path class="gnzoq5b8p"/>`,
		"fallback": "energy-icons:spray-can-20-bold",
	});
}

export default Component;
