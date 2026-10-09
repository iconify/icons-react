import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7kmq_acp.css';
import '../../css/w/w55c0y9-s.css';
import '../../css/a/a9wuyub9g.css';
import '../../css/e/ebn852b9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7kmq_acp"/><path class="w55c0y9-s"/><path class="a9wuyub9g"/><path class="ebn852b9b"/>`,
		"fallback": "energy-icons:teapot-48",
	});
}

export default Component;
