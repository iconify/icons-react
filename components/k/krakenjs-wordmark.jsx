import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4e2dybch.css';
import '../../css/i/ibasdbcyq.css';
import '../../css/q/qiv3vz5la.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p4e2dybch"/><path class="ibasdbcyq"/><path class="qiv3vz5la"/>`,
		"fallback": "devicon:krakenjs-wordmark",
	});
}

export default Component;
