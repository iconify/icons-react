import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-64jpb0f.css';
import '../../css/w/ww0o6ub_a.css';
import '../../css/z/z9ok8cc2s.css';
import '../../css/k/k3kq6zb1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a-64jpb0f"/><path class="ww0o6ub_a"/><path class="z9ok8cc2s"/><path class="k3kq6zb1y"/>`,
		"fallback": "flat-color-icons:podium-with-speaker",
	});
}

export default Component;
