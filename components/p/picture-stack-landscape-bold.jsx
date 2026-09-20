import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg9ybob4q.css';
import '../../css/d/ddawe438c.css';
import '../../css/j/jdxlagbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg9ybob4q"/><path class="ddawe438c"/><path class="jdxlagbdz"/>`,
		"fallback": "streamline-ultimate:picture-stack-landscape-bold",
	});
}

export default Component;
