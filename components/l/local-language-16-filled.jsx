import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xhx70f2kp {
  fill: currentColor;
  d: path("M7.75 2a.75.75 0 0 0 0 1.5H9.5v.751c0 .385-.097.679-.227.855c-.111.151-.263.247-.515.247a.75.75 0 0 0 0 1.5a2.08 2.08 0 0 0 1.724-.859c.367-.5.518-1.132.518-1.743V2.75a.75.75 0 0 0-.75-.75zM6.698 4.725a.75.75 0 0 0-1.396 0l-3.254 8.25a.75.75 0 1 0 1.395.55l.799-2.024h3.513l.797 2.024a.75.75 0 0 0 1.396-.55zm.466 5.276h-2.33L6 7.045zM12.75 2a.75.75 0 0 1 .75.75v2.248h.25a.75.75 0 0 1 0 1.5h-.25v3.751a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75");
}
</style><path class="xhx70f2kp"/>`,
		"fallback": "fluent:local-language-16-filled",
	});
}

export default Component;
