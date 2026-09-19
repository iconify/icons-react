import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lil6jbckh.css';
import '../../css/l/lyck5hnje.css';
import '../../css/g/g-iywcc7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lil6jbckh"/><path clip-rule="evenodd" class="lyck5hnje"/><path clip-rule="evenodd" class="g-iywcc7p"/>`,
		"fallback": "cuida:share-outline",
	});
}

export default Component;
