import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqiqvacww.css';
import '../../css/k/kv4hsgpqw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqiqvacww"/><path class="kv4hsgpqw"/>`,
		"fallback": "ep:toilet-paper",
	});
}

export default Component;
