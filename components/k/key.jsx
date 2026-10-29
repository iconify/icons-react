import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-_32d92c.css';
import '../../css/x/xmfhvr75a.css';
import '../../css/b/bnvu6ybwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-_32d92c"/><path class="xmfhvr75a"/><path class="bnvu6ybwr"/>`,
		"fallback": "withicons-bauhaus:key",
	});
}

export default Component;
