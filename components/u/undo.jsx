import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk-762bui.css';
import '../../css/x/xi6rm2m0g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk-762bui"/><path class="xi6rm2m0g"/>`,
		"fallback": "ei:undo",
	});
}

export default Component;
